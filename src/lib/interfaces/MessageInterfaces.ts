export interface IMessage {
    type: string;
    room: string;
    roomId: string;
}

export interface IChatMessage extends IMessage {
    message: string;
    messageId: number;
    user?: any[];
    username: string;
    userId: string;
    userRole: string;
    createdAt: number;
}

export interface IErasedMessage extends IMessage {
    messageIds: number[];
    removedBy: {
        username: string;
        userId: string;
    };
}