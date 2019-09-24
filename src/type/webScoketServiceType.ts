export default interface webSocketService {
    handlePostMessage(message: string): void;

    handleGetMessage(message: string): void;

    createSocketLink(): void;

    [propName: string]: any;
}