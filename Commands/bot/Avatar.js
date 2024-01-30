const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  EmbedBuilder,
  ActionRowBuilder,
  PermissionsBitField,
  ButtonBuilder,
  ContextMenuCommandBuilder,
  ApplicationCommand,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("avatar")
    .setType(ApplicationCommandType.User),

  async execute(interaction, client) {
    const embed = new EmbedBuilder().setThumbnail(
      interaction.targetUser.displayAvatarURL()
    );

    interaction.reply({ embeds: [embed] });
  },
};
