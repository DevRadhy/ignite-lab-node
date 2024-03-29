import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
