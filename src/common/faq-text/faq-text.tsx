import React from 'react';
import clsx from 'clsx';

import { Typography } from 'src/common/typography';
import { Faq } from 'src/common/faq';
import { Grid } from 'src/common/grid';
import articleEN from 'src/assets/pdf/Math_Behind_DeFiHelper.pdf';
import * as styles from './faq-text.css';

export type FaqTextProps = {
  className?: string;
};

const FAQ = [
  {
    title: 'What is DeFiHelper and what is it for?',
    body: `DeFiHelper is a management assistant app for crypto portfolios of any size.
    The app is used for automating and boosting returns on DeFi investments.
    DFH provides a comprehensive overview of the entire portfolio, automates routine actions,
    reports on important market-related events, saves on fees, and helps users earn more on their investments.
    In the near future, users will also be able to find investment strategies on the DFH marketplace or create their own and earn a percentage of
    the profits received from the users who apply them.`
  },

  {
    title: 'How exactly does DeFiHelper help earn more?',
    body: `DeFiHelper can restake tokens automatically and helps users earn more using the power of compound interest. [The mathematical model](${window.location.origin}${articleEN}) developed by the DFH team makes decisions based on fees, token prices, and other factors.

Ready-made, high-yield investment strategies devised by other users can be applied (available soon) and followed. Users can also create their own strategies and earn a percentage of the profits received from the users who apply them.

DeFiHelper monitors and reports on sudden changes in profitability, important market-related events, impermanent loss, as well as changes in a crypto portfolio.`
  },

  {
    title: 'What is the mathematical model behind DeFiHelper?',
    body: `The mathematical model developed by the DFH team manages portfolios more efficiently than any human ever could.
    We have written [a dedicated article](${window.location.origin}${articleEN}) about the algorithms applied in DeFiHelper.`
  },

  {
    title: 'How does DeFiHelper make money?',
    body: `Part of DeFiHelper's functionality is available on a paid basis. It includes notifications ($10 per 1,000 messages) and automation ($1 per executed action plus network fee).`
  },

  //   {
  //     title: 'How secure is DeFiHelper?',
  //     body: `DeFiHelper does not have access to users' private keys. The service performs only the actions that users authorize via a special contract that is always under their control.
  //
  // The code behind DeFiHelper has been audited by [MixBytes](https://mixbytes.io/). The results of the audit will be made available within a few weeks after the public launch.`
  //   },

  {
    title: 'How does the automation functionality of DFH work?',
    body: `DFH allows users to automate many actions, depending on certain conditions, such as gas price, time etc. After executing a script, the system hands over control to a special smart contract. DFH manages  user portfolios via this contract.

The smart contract and funds are always under the user's control. Security is paramount for DFH. All smart contract code is open and anyone can perform an audit of any DFH script.`
  },

  {
    title: 'Which wallets does DeFiHelper support?',
    body: `MetaMask, TrustWallet, Ledger, Trezor, Coinbase, WalletConnect, Binance, Fortmatic, Portis, WavesKeeper, WavesExchange.`
  },

  {
    title: 'Which blockchains does DeFiHelper support?',
    body: `The following blockchains are supported: Ethereum, Binance Smart Chain, Avalanche and Polygon. Support for other popular networks will be added in the near future.`
  },

  {
    title: 'How can I help the project?',
    body: `If you are a developer, you can help with building new features. The community prioritizes the most important tasks via voting. The team then initiates the allocation of a budget for the development of such functionality. Payment is made in native DFH tokens. The tokens are allocated gradually in accordance with the schedule that is embedded in a smart contract. This is to incentivize developers to support their code for some time after release. In total, 30% of the total emission of DFH tokens is allocated for development.

If you do not have any programming skills, you can help in other ways by creating content, maintaining chats in local languages, or helping establish partnerships. All contributions are paid in DFH tokens. For more details, please visit the [Tokenomics](/tokenomics) page.`
  },

  {
    title: 'What is the DFH token used for?',
    body: `The DFH token is used for participation in governance and for distributing income generated by the protocol.`
  },

  {
    title: 'What is the supply and distribution of DFH tokens?',
    body: `The initial supply will be set at 1 billion DFH tokens. The tokens will be distributed in accordance with the following percentages:

* 250,000,000 (25%) — grants for development during the first three years of operation.
* 170,000,000 (17%) — private and public token sale rounds.
* 120,000,000 (12%) — core team allocation.
* 110,000,000 (11%) — marketing budget for the first year of operation.
* 100,000,000 (10%) — Rewards for early investors who fund the development and launch of the protocol.
* 100,000,000 (10%) — tokens allocated for distribution through liquidity pools during the first year of operation.
* 80,000,000 (8%) — bonus tokens for early adopters.
* 70,000,000 (7%) — grants for DeFiHelper Advisors.`
  },

  {
    title: 'How do I buy DFH tokens?',
    body: `DFH tokens are not available yet. After the launch, they can be obtained in several ways:

* Private and public token sale rounds.
* Purchased on exchanges (Uniswap, Waves, Pancakeswap).
* Received in exchange for liquidity (staking).
* Received as a development grant.
* Received as a grant for help with content, promotion, or moderation.
* Received as a bonus when using the paid features of DeFiHelper (temporary promotion).`
  },

  {
    title: 'What are the addresses of DFH smart contracts?',
    body: `You can find all DFH smart contract addresses on the [Contracts](/contracts) page.`
  },

  {
    title: 'Who is on the DeFiHelper team?',
    body: `DeFiHelper was created by an experienced team composed of the former and current employees of BondAppetit, Tokenomica, Deloitte, Mail.ru Group and Artemy Lebedev Studio:

* [Vladislav Komissarov](https://www.linkedin.com/in/vkomissarov/) is the founder and head of the project. CTO of [BondAppetit](https://bondappetit.io/). Vladislav has about 20 years of experience as a developer and technical director in many IT projects.
* [Artem Tolkachev](https://www.linkedin.com/in/artemtolkachev/) is a co-founder, and CBDO. He is also the Founder and CEO of BondAppetit, and formerly was the Head of the Blockchain Lab at Deloitte.
* [Igor Varnavsky](https://www.linkedin.com/in/igor-varnavsky-9868aa1/) is the Marketing Director. He is a former employee of [Mango Insurance](https://mango.rocks/) and [VK](https://vk.company/).
* [Ilya Munerman](https://www.linkedin.com/in/ilya-munerman-1936a027/) is the developer of the mathematical models used in DeFiHelper. He has a PhD in economics, leads the [Interfax](https://interfax.com/) scoring systems project, and works as an Assistant Professor at [New Economic School](https://www.nes.ru/ilya-munerman?lang=en) and [HSE University](https://re.hse.ru/expert/munerman).`
  }
];

export const FaqText: React.VFC<FaqTextProps> = (props) => {
  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        family="mono"
        transform="uppercase"
        variant="h2"
        className={styles.title}
      >
        FAQ
      </Typography>
      <Faq>{FAQ}</Faq>
    </Grid.Container>
  );
};
