import type { Notification } from "@/types/index.js";
import type { NotificationMessage } from "@/types/notificationMessage.js";
import type { Monitor } from "@/types/monitor.js";

export interface INotificationProvider {
	sendMessage: (notification: Notification, message: NotificationMessage) => Promise<boolean>;
	sendEscalation: (notification: Notification, monitor: Monitor, message: string) => Promise<boolean>;
	sendTestAlert(notification: Partial<Notification>): Promise<boolean>;
}
