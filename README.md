
# Overview

This project is a tool designed to stream questions asked in a Stack Exchange community into both a Telegram and Discord channel. The goal of this tool is to make it easier for developers to monitor relevant questions and issues being shared on their respective community forum.



# Contributions

This project is open source, and we welcome contributions from anyone in the community. If you find a bug or have a feature request, please raise an issue. Alternatively, feel free to fork the repository and submit a pull request. We appreciate any effort to improve the functionality of this tool and make it more valuable to developers.
## Installation

### Clone Repo

To clone the repository, use the following command:

```bash
git clone https://github.com/Web3-Builders-Alliance/tg-discord-bot-tool.git
```

# Installation

After cloning the repository, use the following command to install the project dependencies:

```bash
yarn install
```

### Configuring the Environment Variables

Before you can run the tool, you must create an .env file and fill it with the appropriate information. An example of the format required for the .env file is included in the repository.

```bash
DISCORD_WEBHOOK_URL=https://discordapp.com/api/webhooks/123456789
```

Replace the webhook URL with the URL of the Discord webhook you want to use in your integration.

### Running the Tool

To run the tool, use the following command from the command line:

```bash
  yarn feedDiscord
```

This command will start the process of streaming questions from Stack Exchange to your configured Discord channel.

## Creating Discord Bot

You need to create a discord bot. Follow this tutorial https://www.writebots.com/discord-bot-token/

  
## Authors

- [@thisisamridh](https://www.github.com/thisissamridh)
- [@CryptoUncleSam](https://github.com/CryptoUncleSam)
- [@Jrejoire](https://www.github.com/Jrejoire)
