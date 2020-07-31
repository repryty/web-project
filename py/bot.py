import discord
from discord.ext import commands

client = discord.Client()
import time

@client.event
async def on_ready():
    print("이예에에에ㅔ에에에에\n리봇이 드디어 켜졌오요!!!!!!\n두둥탁")
    game = discord.Game("이예ㅔ에에에에")
    await client.change_presence(status=discord.Status.online, activity=game)

@client.event
async def on_message(message):
    if message.author.bot:
        return None
    
    if message.author == client.user:
        return

    if "리봇!!" in message.content:
        embed=discord.Embed(title="리봇 도움말!!!!", description="쨔쟌", color=0xd4fff1)
        embed.set_author(name="made by REPRYTY", url="https://repryty.github.io", icon_url="https://cdn.discordapp.com/attachments/694437628157624384/720582922280632381/profile_user.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/694437628157624384/720582922280632381/profile_user.png")
        embed.add_field(name="리봇!!", value="리봇을 불러요", inline=False)
        embed.add_field(name="따라하기", value="뒤의 문장을 따라해욧!!\nex: 따라하기 ㅔㅔㅔㅔ", inline=False)
        embed.add_field(name="이스터에그", value="숨겨진 이스터에그가 있습니다....후훟ㅎ", inline=False)
        embed.add_field(name="안내", value="깨끗한 채팅창을 위해서 리봇을 호출하면 자동으로 메세지가 삭제되요.\n일부 메세지 제외", inline=False)
        embed.set_footer(text="last update 2020.6.11, \nmade by REPRYTY \npowered by Discord.py")
        await message.channel.send(embed=embed)
        await message.delete()
        #time.sleep(23)
        #await message.delete(delmsg)
    
    if message.content.startswith("따라하기 ", 0):
        reply = message.content.replace("따라하기 ", "")
        await message.channel.send(reply)
        await message.delete()
    
    if '장비를 정지합니다.' in message.content or '장비를 정지합니다' in message.content:
        await message.channel.send('앙대')
        time.sleep(1)
        await message.channel.send('정지하겠습니다')
        time.sleep(2)
        await message.channel.send('앙대자나?')
        time.sleep(2)
        await message.channel.send('어;; 정..정지가 앙대. 정지시킬 수가 업써')
        time.sleep(3)
        await message.channel.send('앙대ㅐ!')


client.run('NzE3NzQwNTE2MjYzMDY3NzQy.XuH1gQ.xwumX5azUgikvZInXPgjgUd1Wqw')