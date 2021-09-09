import discord
from economycord import EconomyCord
from discord.ext import commands

intents = discord.Intents(guilds=True, messages=True)
intents.members = True

bot = commands.Bot("!",
                   intents=intents,
                   allowed_mentions=discord.AllowedMentions(replied_user=False),
                   status=discord.Status.idle,
                   activity=discord.Game(name="with your feelings."),
                   slash_commands=True,
                   slash_command_guilds=[788110787724967956],
                   help_command=None)

bot.economy = EconomyCord(database_dir="./database",
                          starting_balance=0,
                          auto_check_users=True)

bot.run()
