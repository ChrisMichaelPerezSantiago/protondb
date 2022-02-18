<p align="center">
  <img src="./public/logo.svg" width="30%" alt="ProtonDB" />
  <div style="text-align: center;">
  <h1 >ProtonDB</h1>
    <a href="https://nodei.co/npm/protondb/"><img src="https://nodei.co/npm/protondb.png"></a>
    </div>
</p>

> ProtonDB is an unofficial community website that collects and displays crowdsourced data describing the compatibility of a given title with Proton, on a rating scale from "Borked" to "Platinum"

## `fn content({sort: ''})`

| sort               |
| ------------------ |
| _releaseDate_      |
| _wilsonRating_     |
| _recentlyImproved_ |
| _playerCount_      |
| _userScore_        |
| _mostBorked_       |
| _fixWanted_        |

```js
(async () => {
  const options = {
    sort: 'releaseDate',
  };
  const data = await content(options);
})();
```

```json
{
  "appId": "406350",
  "hasLinuxBuild": false,
  "peakConcurrent": 0,
  "title": "KartKraft",
  "context": 2022,
  "contextType": "releaseYear",
  "userScore": 79.7
}
// ...
```

## `fn summary(appId='')`

```js
(async () => {
  const data = await summary((appId = '406350'));
})();
```

```json
{
  "bestReportedTier": "platinum",
  "confidence": "moderate",
  "score": 0.6,
  "tier": "platinum",
  "total": 13,
  "trendingTier": "platinum"
}
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris Michael*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2022 [Protondb](https://github.com/ChrisMichaelPerezSantiago/protondb).
