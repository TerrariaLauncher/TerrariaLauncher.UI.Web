export function actionCreator(type) {
    return function(payload) {
        return {
            type,
            payload
        }
    }
}
