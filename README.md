# Football Notes

A personal tracking application for football matches. This project allows users to log watched games, write summaries, rate players, and visualize match statistics.

**Blog Post:** [adsy.dev/node/27](https://adsy.dev/node/27)

![Drupal](https://img.shields.io/badge/drupal-%230678BE.svg?style=for-the-badge&logo=drupal&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Highcharts](https://img.shields.io/badge/Highcharts-%23333333.svg?style=for-the-badge&logo=highcharts&logoColor=white)

## 📖 About

**Football Notes** was born from a desire to keep a history of the matches I watched. It serves as a personal feed of match summaries and player performance ratings.

Built on a lightweight **Drupal** architecture, it focuses on content contribution and data visualization. The project also explores external API integration by fetching match statistics from the **Mon Petit Gazon (MPG)** API to enrich match logs automatically.

### Key Features
* **Match Logging:** Infinite scroll interface with filters for clubs, teams, and championships.
* **Player Ratings:** System to rate player performances (thumbs up/down) and write detailed summaries.
* **Data Visualization:** Integration of **Highcharts.js** to display match stats in clear bar charts.
* **API Integration:** Automated data import mechanism using the MPG API (Mon Petit Gazon).

## 🛠️ Tech Stack

* **Framework:** Drupal
* **Frontend:** Custom Twig Theme, SCSS, Highcharts.js
* **Database:** MariaDB
* **Infrastructure:** Docker (Nginx, PHP, MariaDB)
* **Tools:** Drush, Composer, NPM
