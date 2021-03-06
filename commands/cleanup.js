const { Permissions } = require('discord.js');

exports.run = (client, message, label, args) => {
    const parent = message.guild.channels.cache.find(
        c => c.name === client.config.categoryName && c.type === 'category'
    );
    if (!parent) return;
    for (const [, channel] of parent.children) {
        channel.delete('cleaned up');
    }
};

exports.usage = {
    name: 'cleanup',
    userPermissions: [Permissions.FLAGS.ADMINISTRATOR],
};
