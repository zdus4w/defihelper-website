import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { TokenomicsReleaseChart } from '../tokenomics-release-chart';
import { TokenomicsUnlockChart } from '../tokenomics-unlock-chart';
import * as styles from './tokenomics-charts.css';

export type TokenomicsChartsProps = {
  className?: string;
};

const UNLOCK_DATA = [
  {
    Development: '0',
    Marketing: '0',
    'Liquidity rewards': '0',
    'Community grants': '0',
    Team: '0',
    'Private sale': '0',
    'Early ecosystem rewards': '0',
    'Team launch bonus': '0',
    date: new Date(2021, 11, 1)
  },
  {
    Development: '0',
    Marketing: '0',
    'Liquidity rewards': '0',
    'Community grants': '0',
    Team: '0',
    'Private sale': '0',
    'Early ecosystem rewards': '0',
    'Team launch bonus': '0',
    date: new Date(2021, 12, 1)
  },

  {
    Development: '8333333.33333333',
    Marketing: '8333333.33333333',
    'Liquidity rewards': '8333333.33333333',
    'Community grants': '5833333.33333333',
    Team: '15833333.3333333',
    'Private sale': '0',
    'Early ecosystem rewards': '13333333.3333333',
    'Team launch bonus': '0',
    date: new Date(2022, 1, 1)
  },
  {
    Development: '16666666.6666667',
    Marketing: '16666666.6666667',
    'Liquidity rewards': '16666666.6666667',
    'Community grants': '11666666.6666667',
    Team: '31666666.6666666',
    'Private sale': '150000000',
    'Early ecosystem rewards': '26666666.6666666',
    'Team launch bonus': '10000000',
    date: new Date(2022, 2, 1)
  },
  {
    Development: '25000000',
    Marketing: '25000000',
    'Liquidity rewards': '25000000',
    'Community grants': '17500000',
    Team: '47499999.9999999',
    'Private sale': '150000000',
    'Early ecosystem rewards': '39999999.9999999',
    'Team launch bonus': '10000000',
    date: new Date(2022, 3, 1)
  },
  {
    Development: '33333333.3333333',
    Marketing: '33333333.3333333',
    'Liquidity rewards': '33333333.3333333',
    'Community grants': '23333333.3333333',
    Team: '63333333.3333332',
    'Private sale': '150000000',
    'Early ecosystem rewards': '53333333.3333332',
    'Team launch bonus': '10000000',
    date: new Date(2022, 4, 1)
  },
  {
    Development: '41666666.6666666',
    Marketing: '41666666.6666666',
    'Liquidity rewards': '41666666.6666666',
    'Community grants': '29166666.6666666',
    Team: '79166666.6666665',
    'Private sale': '150000000',
    'Early ecosystem rewards': '66666666.6666665',
    'Team launch bonus': '10000000',
    date: new Date(2022, 5, 1)
  },
  {
    Development: '49999999.9999999',
    Marketing: '49999999.9999999',
    'Liquidity rewards': '49999999.9999999',
    'Community grants': '34999999.9999999',
    Team: '94999999.9999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2022, 6, 1)
  },
  {
    Development: '58333333.3333332',
    Marketing: '58333333.3333332',
    'Liquidity rewards': '58333333.3333332',
    'Community grants': '40833333.3333332',
    Team: '110833333.333333',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2022, 7, 1)
  },
  {
    Development: '66666666.6666665',
    Marketing: '66666666.6666665',
    'Liquidity rewards': '66666666.6666665',
    'Community grants': '46666666.6666665',
    Team: '126666666.666666',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2022, 8, 1)
  },
  {
    Development: '74999999.9999998',
    Marketing: '74999999.9999998',
    'Liquidity rewards': '74999999.9999998',
    'Community grants': '52499999.9999998',
    Team: '142499999.999999',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2022, 9, 1)
  },
  {
    Development: '83333333.3333331',
    Marketing: '83333333.3333331',
    'Liquidity rewards': '83333333.3333331',
    'Community grants': '58333333.3333331',
    Team: '158333333.333332',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2022, 10, 1)
  },
  {
    Development: '91666666.6666664',
    Marketing: '91666666.6666664',
    'Liquidity rewards': '91666666.6666664',
    'Community grants': '64166666.6666664',
    Team: '174166666.666665',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2022, 11, 1)
  },
  {
    Development: '99999999.9999997',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2022, 12, 1)
  },

  {
    Development: '108333333.333333',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 1, 1)
  },
  {
    Development: '116666666.666666',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 2, 1)
  },
  {
    Development: '124999999.999999',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 3, 1)
  },
  {
    Development: '133333333.333332',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 4, 1)
  },
  {
    Development: '141666666.666665',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 5, 1)
  },
  {
    Development: '149999999.999998',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 6, 1)
  },
  {
    Development: '158333333.333331',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 7, 1)
  },
  {
    Development: '166666666.666664',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 8, 1)
  },
  {
    Development: '174999999.999997',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 9, 1)
  },
  {
    Development: '183333333.33333',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 10, 1)
  },
  {
    Development: '191666666.666663',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 11, 1)
  },
  {
    Development: '199999999.999996',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2023, 12, 1)
  },

  {
    Development: '208333333.333329',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2024, 1, 1)
  },
  {
    Development: '216666666.666662',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2024, 2, 1)
  },
  {
    Development: '224999999.999995',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2024, 3, 1)
  },
  {
    Development: '233333333.333328',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2024, 4, 1)
  },
  {
    Development: '241666666.666661',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2024, 5, 1)
  },
  {
    Development: '249999999.999994',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2024, 6, 1)
  },
  {
    Development: '258333333.333327',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2024, 7, 1)
  },
  {
    Development: '266666666.66666',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2024, 8, 1)
  },
  {
    Development: '274999999.999993',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    Team: '189999999.999998',
    'Private sale': '150000000',
    'Early ecosystem rewards': '79999999.9999998',
    'Team launch bonus': '10000000',
    date: new Date(2024, 9, 1)
  }
];

const UNLOCK_DATA_FIELDS = [
  {
    valueY: 'Development',
    dateX: 'date',
    color: '#39C077'
  },
  {
    valueY: 'Marketing',
    dateX: 'date',
    color: '#977854'
  },
  {
    valueY: 'Liquidity rewards',
    dateX: 'date',
    color: '#CCFF3C'
  },
  {
    valueY: 'Community grants',
    dateX: 'date',
    color: '#EBD8BC'
  },
  {
    valueY: 'Team',
    dateX: 'date',
    color: '#4463EE'
  },
  {
    valueY: 'Private sale',
    dateX: 'date',
    color: '#E9CC67'
  },
  {
    valueY: 'Early ecosystem rewards',
    dateX: 'date',
    color: '#F08BA9'
  },
  {
    valueY: 'Team launch bonus',
    dateX: 'date',
    color: '#E35137'
  }
];

const RELEASE_DATA = [
  {
    Modeled: '0',
    date: new Date(2021, 11, 1)
  },
  {
    Modeled: '0',
    date: new Date(2021, 12, 1)
  },

  {
    Modeled: '59999999.9999999',
    date: new Date(2022, 1, 1)
  },
  {
    Modeled: '280000000',
    date: new Date(2022, 2, 1)
  },
  {
    Modeled: '340000000',
    date: new Date(2022, 3, 1)
  },
  {
    Modeled: '400000000',
    date: new Date(2022, 4, 1)
  },
  {
    Modeled: '460000000',
    date: new Date(2022, 5, 1)
  },
  {
    Modeled: '520000000',
    date: new Date(2022, 6, 1)
  },
  {
    Modeled: '566666666.666667',
    date: new Date(2022, 7, 1)
  },
  {
    Modeled: '613333333.333334',
    date: new Date(2022, 8, 1)
  },
  {
    Modeled: '660000000.000001',
    date: new Date(2022, 9, 1)
  },
  {
    Modeled: '706666666.666668',
    date: new Date(2022, 10, 1)
  },
  {
    Modeled: '753333333.333335',
    date: new Date(2022, 11, 1)
  },
  {
    Modeled: '800000000.000002',
    date: new Date(2022, 12, 1)
  },

  {
    Modeled: '808333333.333335',
    date: new Date(2023, 1, 1)
  },
  {
    Modeled: '816666666.666668',
    date: new Date(2023, 2, 1)
  },
  {
    Modeled: '825000000.000001',
    date: new Date(2023, 3, 1)
  },
  {
    Modeled: '833333333.333334',
    date: new Date(2023, 4, 1)
  },
  {
    Modeled: '841666666.666667',
    date: new Date(2023, 5, 1)
  },
  {
    Modeled: '850000000',
    date: new Date(2023, 6, 1)
  },
  {
    Modeled: '858333333.333333',
    date: new Date(2023, 7, 1)
  },
  {
    Modeled: '866666666.666666',
    date: new Date(2023, 8, 1)
  },
  {
    Modeled: '874999999.999999',
    date: new Date(2023, 9, 1)
  },
  {
    Modeled: '883333333.333332',
    date: new Date(2023, 10, 1)
  },
  {
    Modeled: '891666666.666665',
    date: new Date(2023, 11, 1)
  },
  {
    Modeled: '899999999.999998',
    date: new Date(2023, 12, 1)
  },

  {
    Modeled: '908333333.333331',
    date: new Date(2024, 1, 1)
  },
  {
    Modeled: '916666666.666664',
    date: new Date(2024, 2, 1)
  },
  {
    Modeled: '924999999.999997',
    date: new Date(2024, 3, 1)
  },
  {
    Modeled: '933333333.33333',
    date: new Date(2024, 4, 1)
  },
  {
    Modeled: '941666666.666663',
    date: new Date(2024, 5, 1)
  },
  {
    Modeled: '949999999.999996',
    date: new Date(2024, 6, 1)
  },
  {
    Modeled: '958333333.333329',
    date: new Date(2024, 7, 1)
  },
  {
    Modeled: '966666666.666662',
    date: new Date(2024, 8, 1)
  },
  {
    Modeled: '974999999.999995',
    date: new Date(2024, 9, 1)
  }
];

const RELEASE_DATA_FIELDS = [
  {
    valueY: 'Modeled',
    dateX: 'date',
    color: '#4463EE'
  }
  // {
  //   valueY: 'Real',
  //   dateX: 'date',
  //   color: '#CCFF3C'
  // }
];

export const TokenomicsCharts: React.VFC<TokenomicsChartsProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Paper className={styles.grid}>
        <div>
          <TokenomicsUnlockChart
            dataFields={UNLOCK_DATA_FIELDS}
            data={UNLOCK_DATA}
          />
        </div>
        <div>
          <TokenomicsReleaseChart
            dataFields={RELEASE_DATA_FIELDS}
            data={RELEASE_DATA}
          />
        </div>
      </Paper>
    </Grid.Container>
  );
};
