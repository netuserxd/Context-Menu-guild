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
    .setName("ban")
    .setType(ApplicationCommandType.User),

  async execute(interaction, client) {

const { targetId } = interaction;

    const embed = new EmbedBuilder()
    .setDescription(`başarılı birşekilde banlandı\n\n> Banlanan kullanıcı: <@${targetId}>`)

    interaction.guild.bans.create(targetId)

    interaction.reply({ embeds: [embed] });
  },
};
