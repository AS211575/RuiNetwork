import CipherHint from "./CipherHint";
import styles from "./page.module.css";

const peeringDetails = [
  { label: "ASN", value: "211575" },
  { label: "AS-SET", value: "AS211575:AS-RUINETWORK" },
  { label: "Suggested IPv4 Prefix limit", value: "100" },
  { label: "Suggested IPv6 Prefix limit", value: "500" },
];

const internetExchanges = [
  {
    name: "STUIX",
    ipv4: "103.158.187.167",
    ipv6: "2a0f:5707:ffe3::167",
    speed: "10 gbps",
  },
  {
    name: "AKIX - HKG",
    ipv4: "—",
    ipv6: "2a14:67c1:a080:2:0:2115:75:1",
    speed: "1000 mbps",
  },
  {
    name: "INTERIX",
    ipv4: "185.0.1.125",
    ipv6: "2001:7f8:134::4a",
    speed: "1000 mbps",
  },
];

const virtualExchanges = [
  {
    name: "LoLi-IX - NGB",
    ipv4: "—",
    ipv6: "2a14:7581:30fa::2115:75:1",
    speed: "10 gbps",
  },
  {
    name: "AKIX - TFU (10 gbps)",
    ipv4: "—",
    ipv6: "2001:7f8:fc:1::8",
    speed: "10 gbps",
  },
  {
    name: "Protocol 7 IX - Lycheen Japan",
    ipv4: "—",
    ipv6: "2602:f92a:1315::14",
    speed: "10 gbps",
  },
  {
    name: "Protocol 7 IX - Hong Kong",
    ipv4: "—",
    ipv6: "2602:f92a:1315:2::5",
    speed: "10 gbps",
  },
  {
    name: "DataSphere Internet Exchange (Hong Kong)",
    ipv4: "—",
    ipv6: "2602:f613::2115:75:1",
    speed: "10 gbps",
  },
  {
    name: "LoLi-IX - HKG",
    ipv4: "—",
    ipv6: "2a14:7581:30ff::2115:75:1",
    speed: "1000 mbps",
  },
  {
    name: "4b42 Internet Exchange Point",
    ipv4: "—",
    ipv6: "2001:7f8:d0::3:3a77:1",
    speed: "1000 mbps",
  },
  {
    name: "ZXIX Hangzhou",
    ipv4: "—",
    ipv6: "2406:840:1f:1:0:21:1575:1",
    speed: "1000 mbps",
  },
  {
    name: "AKIX - TFU (1000 mbps)",
    ipv4: "—",
    ipv6: "2a14:67c1:a080:1::2115:75",
    speed: "1000 mbps",
  },
  {
    name: "CXIX - Great Lakes",
    ipv4: "—",
    ipv6: "2a0f:7803:fc60:aaaa::2115:75",
    speed: "1000 mbps",
  },
  {
    name: "ZXIX Hong Kong",
    ipv4: "—",
    ipv6: "2406:840:1f:1000:0:21:1575:1",
    speed: "1000 mbps",
  },
  {
    name: "AKIX",
    ipv4: "—",
    ipv6: "2a14:67c1:a080::5b07",
    speed: "1000 mbps",
  },
  {
    name: "Zero Internet eXchange San Jose",
    ipv4: "23.145.168.242",
    ipv6: "2a13:b487:3200::21:1575:1",
    speed: "1000 mbps",
  },
  {
    name: "EVIX",
    ipv4: "—",
    ipv6: "2602:fed2:fff:ffff:6::fa",
    speed: "1000 mbps",
  },
  {
    name: "BGP.Exchange - Tokyo",
    ipv4: "—",
    ipv6: "2a0e:8f01:1000:9::118",
    speed: "1000 mbps",
  },
  {
    name: "BGP.Exchange - Zurich",
    ipv4: "—",
    ipv6: "2a0e:8f01:1000:25::159",
    speed: "1000 mbps",
  },
  {
    name: "BGP.Exchange - Frankfurt",
    ipv4: "—",
    ipv6: "2a0e:8f01:1000:24::220",
    speed: "1000 mbps",
  },
  {
    name: "Poema IX",
    ipv4: "—",
    ipv6: "2404:f4c0:f70e:1980::211:575",
    speed: "500 mbps",
  },
];

const locations = [
  "日本东京 | To- Kyo-, JP",
  "美国堪萨斯城 | Kansas City, US",
  "香港 | Hong Kong, HK",
];

const upstreams = [
  { name: "Skywolf Technology LLC", asn: "AS7720" },
  { name: "MoeDove LLC", asn: "AS44324" },
  { name: "Liu HaoRan", asn: "AS213605" },
  { name: "Oracle Cloud", asn: "AS31898" },
  { name: "Zhuhai Xiyun Cloud Technology Co., Ltd.", asn: "AS214439" },
  { name: "Yijia Xu", asn: "AS210352" },
  { name: "FranTech Solutions", asn: "AS53667" },
  { name: "JianyueLab Ltd.", asn: "AS215172" },
  { name: "Axivora Connect LtD", asn: "AS204539" },
  { name: "Hurricane Electric LLC", asn: "AS6939" },
  { name: "MoeDove", asn: "AS53808" },
];

const lastUpdated = "2026-02-21";

type Exchange = {
  name: string;
  ipv4: string;
  ipv6: string;
  speed: string;
};

function ExchangeTable({ items }: { items: Exchange[] }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>IPv4</th>
            <th>IPv6</th>
            <th>Link Speed</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={`${item.name}-${item.ipv6}`}>
              <td>{item.name}</td>
              <td>{item.ipv4}</td>
              <td>{item.ipv6}</td>
              <td>{item.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.tag}>AS211575</span>
            <h1>RuiNetwork</h1>
            <p className={styles.subtitle}>
              Rui的学术研究网络 · An IPv6-only experimental network operated by
              Rui Feng.
            </p>
            <div className={styles.heroLinks}>
              <a
                className={styles.primaryLink}
                href="https://bgp.tools/as/211575"
                target="_blank"
                rel="noreferrer"
              >
                View on BGP.Tools
              </a>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div>
              <p className={styles.heroLabel}>IPv6 Focus</p>
              <p className={styles.heroValue}>IPv6-only routing</p>
            </div>
            <div>
              <p className={styles.heroLabel}>Peering Policy</p>
              <p className={styles.heroValue}>Open & community-friendly</p>
            </div>
            <div>
              <p className={styles.heroLabel}>Service Areas</p>
              <p className={styles.heroValue}>Tokyo · Hong Kong · US</p>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h2>介绍 | Introduce</h2>
          <p>
            RuiNetwork（<a href="https://bgp.tools/as/211575">AS211575</a>）由{" "}
            <a href="//fengrui.link">Rui Feng</a> 运营。
          </p>
          <p>
            RuiNetwork (<a href="https://bgp.tools/as/211575">AS211575</a>) is
            operated by <a href="//fengrui.link">Rui Feng</a>, a geek student.
          </p>
          <p>本网络只支持 IPv6 / This network only supports IPv6.</p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>对等互联 | Peering</h2>
            <p>
              我们开放对等互联。你想随便怎么互联都可以。We have an open
              peering policy.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {peeringDetails.map((item) => (
              <div className={styles.card} key={item.label}>
                <p className={styles.cardLabel}>{item.label}</p>
                <p className={styles.cardValue}>{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>交换中心 | IX</h2>
            <p>Internet Exchange Points connected to AS211575.</p>
          </div>
          <div className={styles.sectionBlock}>
            <h3>Internet Exchange Points</h3>
            <ExchangeTable items={internetExchanges} />
          </div>
          <div className={styles.sectionBlock}>
            <h3>Virtual Internet Exchange Points</h3>
            <ExchangeTable items={virtualExchanges} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>位置 | Locations</h2>
            <p>Core presences and deployment regions.</p>
          </div>
          <ul className={styles.list}>
            {locations.map((location) => (
              <li key={location}>{location}</li>
            ))}
          </ul>
          <p className={styles.note}>
            <del>虽然不只一个地方，但我还是穷逼</del>
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>上游 | Upstreams</h2>
            <p>Transit and upstream partners from BGP.Tools.</p>
          </div>
          <ul className={styles.list}>
            {upstreams.map((upstream) => (
              <li key={upstream.asn}>
                {upstream.name} ({upstream.asn})
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>联系 | Contact</h2>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.card}>
              <p className={styles.cardLabel}>Telegram</p>
              <p className={styles.cardValue}>https://t.me/AS211575</p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardLabel}>Email</p>
              <p className={styles.cardValue}>fengrui@fengrui@asia</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>更多 | More</h2>
          </div>
          <p>
            <del>我太懒了。</del>
          </p>
        </section>

        <footer className={styles.footer}>
          <p>本页最后更新于 Last updated on {lastUpdated}</p>
        </footer>
        <CipherHint />
      </div>
    </div>
  );
}
