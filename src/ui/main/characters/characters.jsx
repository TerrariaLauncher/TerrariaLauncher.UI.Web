import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button, Form, Header, Icon, Input, Label, List, Modal } from 'semantic-ui-react';
import * as registeredInstanceUserthunks from '../../../stores/registered-instance-users/thunks.js';
import * as instanceUserThunks from '../../../stores/instance-users/thunks.js';
import * as modalActions from '../../../stores/ui/modals/actions.js';
import styles from './stylesheets.module.scss';

const messages = {
    name: {
        'DUPLICATED': 'Character name is duplicated. Please choose an other one.'
    },
    password: {
        'SHORT': 'Password is too short. The length must be large than 8.'
    }
};

export function Characters(props) {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.authentication.user.id);
    const instanceId = useSelector(state => state.tradingSystem.instanceId);
    const instances = useSelector(state => state.instances.byId);

    const { byId: instanceUsers, allIds: instanceUserIds } = useSelector(state => state.registeredInstanceUsers);

    const registrationModal = useSelector(state => state.ui.characters.registrationModal);
    const deregistrationModal = useSelector(state => state.ui.characters.deregistrationModal);
    const passwordResetModal = useSelector(state => state.ui.characters.passwordResetModal);

    const [passwordResetInstanceUserId, setPasswordResetInstanceUserId] = useState(null);
    const [deregisteringInstanceUserId, setDeregisteringInstanceUserId] = useState(null);

    function handleDeregisterClick(instanceUserId) {
        setDeregisteringInstanceUserId(instanceUserId);
        dispatch(modalActions.openModal({
            modalType: modalActions.ModalTypes.CHARACTER_DEREGISTRATION
        }));
    }

    function handleDeregisterConfirm() {
        dispatch(registeredInstanceUserthunks.deregisterInstanceUserThunk({
            userId,
            instanceId,
            instanceUserId: deregisteringInstanceUserId
        }));
    }

    function handlePasswordResetClick(instanceUserId) {
        setPasswordResetInstanceUserId(instanceUserId);
        dispatch(modalActions.openModal({
            modalType: modalActions.ModalTypes.CHARACTER_PASSWORD_RESET
        }));
    }

    function handlePasswordResetConfirm(newPassword) {
        dispatch(instanceUserThunks.resetPasswordInstanceUserThunk({
            instanceId,
            instanceUserId: passwordResetInstanceUserId,
            newPassword
        }));
    }

    function handleCharacterRegistrationCreate(name, password) {
        dispatch(registeredInstanceUserthunks.registerInstanceUserThunk({
            userId,
            instanceId,
            instanceUserName: name,
            instanceUserPassword: password
        }));
    }

    return (
        <div className={styles.container}>
            <List divided verticalAlign='middle'>
                {instanceUserIds.map(id => (
                    <List.Item key={id}>
                        <List.Content floated='right'>
                            <Button onClick={() => handlePasswordResetClick(id)}>Reset Password</Button>
                            <Button color='orange' onClick={() => handleDeregisterClick(id)}>Delete</Button>
                        </List.Content>
                        <List.Content>
                            <Header as='h1'>{instanceUsers[id].name}</Header>
                        </List.Content>
                    </List.Item>
                ))}
                <List.Item>
                    <List.Content>
                        <CharacterRegistrationModal
                            trigger={
                                <Button color='green'>Create a new Character</Button>
                            }
                            open={registrationModal.open}
                            instance={instances?.[instanceId]}
                            onClose={() => dispatch(modalActions.closeModal({
                                modalType: modalActions.ModalTypes.CHARACTER_REGISTRATION
                            }))}
                            onOpen={() => dispatch(modalActions.openModal({
                                modalType: modalActions.ModalTypes.CHARACTER_REGISTRATION
                            }))}
                            onCreate={handleCharacterRegistrationCreate}
                            onCancel={() => dispatch(modalActions.closeModal({
                                modalType: modalActions.ModalTypes.CHARACTER_REGISTRATION
                            }))}
                            nameInputError={messages.name[registrationModal.nameInputErrorCode]}
                            passwordInputError={messages.password[registrationModal.passwordInputErrorCode]}
                        />
                        <CharacterDeregistrationModal
                            open={deregistrationModal.open}
                            instance={instances?.[instanceId]}
                            instanceUser={instanceUsers?.[deregisteringInstanceUserId]}
                            onOpen={() => dispatch(modalActions.openModal({
                                modalType: modalActions.ModalTypes.CHARACTER_DEREGISTRATION
                            }))}
                            onClose={() => dispatch(modalActions.closeModal({
                                modalType: modalActions.ModalTypes.CHARACTER_DEREGISTRATION
                            }))}
                            onCancel={() => dispatch(modalActions.closeModal({
                                modalType: modalActions.ModalTypes.CHARACTER_DEREGISTRATION
                            }))}
                            onConfirm={handleDeregisterConfirm}
                        />
                        <CharacterResetPasswordModal
                            open={passwordResetModal.open}
                            instance={instances?.[instanceId]}
                            instanceUser={instanceUsers?.[passwordResetInstanceUserId]}
                            onClose={() => dispatch(modalActions.closeModal({
                                modalType: modalActions.ModalTypes.CHARACTER_PASSWORD_RESET
                            }))}
                            onOpen={() => dispatch(modalActions.openModal({
                                modalType: modalActions.ModalTypes.CHARACTER_PASSWORD_RESET
                            }))}
                            onCancel={() => dispatch(modalActions.closeModal({
                                modalType: modalActions.ModalTypes.CHARACTER_PASSWORD_RESET
                            }))}
                            onConfirm={handlePasswordResetConfirm}
                            passwordResetError={messages.password[passwordResetModal.passwordResetErrorCode]}
                        />
                    </List.Content>
                </List.Item>
            </List>
        </div>
    );
}

function CharacterRegistrationModal({
    trigger, open,
    instance,
    onOpen, onClose, onCreate, onCancel,
    nameInputError,
    passwordInputError
}) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [showNameInputError, setShowNameInputError] = useState(true);
    const [showPasswordInputError, setShowPasswordInputError] = useState(true);

    useEffect(() => {
        setName('');
        setPassword('');
    }, [open]);

    /**
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} args
     */
    function handleNameInputChange(args) {
        setName(args.target.value);
    }

    /**
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} args
     */
    function handlePasswordInputChange(args) {
        setPassword(args.target.value);
    }

    function handleCreate() {
        onCreate?.(name, password);
        setShowNameInputError(true);
        setShowPasswordInputError(true);
    }

    function handleCancel() {
        onCancel?.();
    }

    return (
        <Modal trigger={trigger} open={open} onClose={() => onClose?.()} onOpen={() => onOpen?.()}>
            <Modal.Header>
                Register a new character in realm <Label size='big'><Icon name='server' />{instance?.name ?? '💥'}</Label>
            </Modal.Header>
            <Modal.Content>
                <p>To join the realm, you must create a character consists of "name" and "password". Using the "name" and "password" for authentication with command "/login name password".</p>
                <Form>
                    <Form.Field>
                        <label>Name:</label>
                        <input placeholder='Enter your character name ...'
                            value={name}
                            onChange={handleNameInputChange}
                            onClick={() => setShowNameInputError(false)}
                        />
                        {showNameInputError && nameInputError && <Label basic color='red' pointing>{nameInputError}</Label>}
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input placeholder='Enter your character password ...'
                            type='password'
                            value={password}
                            onChange={handlePasswordInputChange}
                            onClick={() => setShowPasswordInputError(false)}
                        />
                        {showPasswordInputError && passwordInputError && <Label basic color='red' pointing>{passwordInputError}</Label>}
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={handleCancel}>
                    Cancel
                </Button>
                <Button color='green' onClick={handleCreate}>
                    Create
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

function CharacterDeregistrationModal({ open, instance, instanceUser, onClose, onOpen, onCancel, onConfirm }) {
    function handleClose() {
        onClose?.();
    }

    function handleOpen() {
        onOpen?.();
    }

    function handleCancel() {
        onCancel?.();
    }

    function handleConfirm() {
        onConfirm?.();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
        >
            <Modal.Header>
                Deregister character <Label size='big'><Icon name='user' />{instanceUser?.name ?? '💥'}</Label> in realm <Label size='big'><Icon name='server' />{instance?.name ?? '💥'}</Label>
            </Modal.Header>
            <Modal.Content>
                <p>If a character is unregistered, you can not use it to authentication realm it belongs to. Please thinking carefully before confirm.</p>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button color='red' onClick={handleConfirm}>Confirm</Button>
            </Modal.Actions>
        </Modal>
    );
}

function CharacterResetPasswordModal({ open, instance, instanceUser, onClose, onOpen, onCancel, onConfirm, passwordResetError }) {
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordResetError, setShowPasswordResetError] = useState(true);

    useEffect(() => {
        setNewPassword('');
    }, [open])

    function handleConfirmClick() {
        onConfirm?.(newPassword);
        setShowPasswordResetError(true);
    }

    return (
        <Modal
            open={open}
            onClose={() => onClose?.()}
            onOpen={() => onOpen?.()}
        >
            <Modal.Header>
                Reset password for character <Label size='big'><Icon name='user' />{instanceUser?.name ?? '💥'}</Label> in realm <Label size='big'><Icon name='server' />{instance?.name ?? '💥'}</Label>
            </Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>New Password:</label>
                        <Input action>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={args => setNewPassword(args.target.value)}
                                onClick={() => setShowPasswordResetError(false)}
                            />
                            <Button icon onClick={() => setShowPassword(!showPassword)}>
                                <Icon name={showPassword ? 'eye slash' : 'eye'} />
                            </Button>
                        </Input>
                        {showPasswordResetError && passwordResetError && <Label basic color='red' pointing>{passwordResetError}</Label>}
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => onCancel?.()}>Cancel</Button>
                <Button color='red' onClick={handleConfirmClick}>Confirm</Button>
            </Modal.Actions>
        </Modal>
    );
}
