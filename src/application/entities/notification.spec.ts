import { Notification } from './notification';
import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
});
