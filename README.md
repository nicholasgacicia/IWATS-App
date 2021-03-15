[![Phish.net Logo](./src/img/ph_logo.png)](https://git.generalassemb.ly/nicholasgacicia) [![Phish.net Logo](./src/img/ph_logo.png)](https://git.generalassemb.ly/nicholasgacicia) [![Phish.net Logo](./src/img/ph_logo.png)](https://git.generalassemb.ly/nicholasgacicia) [![Phish.net Logo](./src/img/ph_logo.png)](https://git.generalassemb.ly/nicholasgacicia) [![Phish.net Logo](./src/img/ph_logo.png)](https://git.generalassemb.ly/nicholasgacicia)

# I Was @ That Show

#### General Assembly SEI 1207

*by: Nicholas Gacicia*

> ##### URL
> https://IWATS.herokuapp.com/

> ##### GitHub Repos
> React App: https://git.generalassemb.ly/nicholasgacicia/YEMStats-App
> Express API: https://git.generalassemb.ly/nicholasgacicia/YEMStats-API

> Show Tracker and Stats Platform

> I Was @ That Show is a full-stack MERN application that enables concert attendees to track the live performances that they have attended.  They will have the ability to look through all shows ever played by their favorite artist, view the shows setlist, and read the official review.  Specifically designed for fan's of the band Phish, users can create posts on individual shows, setlists or songs and view the comments left by others.  Future updates will allow users to view their detailed statistics, compare stats with others, show off their band loyalty with acheivable badges on their profile pages, and even check-in and locate their friends real-time at the venue on the day of the show.

> A community for live music fans to share their memories and coordinate future events with others like themselves.

> Keywords: IWas@ThatShow, Phish, Music, Stats, Tracker, HelpingFriendlyApp, Weekapaug

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=plastic)](https://img.shields.io/badge/build-passing-brightgreen?style=plastic) [![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen?style=plastic)](https://img.shields.io/badge/coverage-100%25-brightgreen?style=plastic) [![Vulnerabilities](https://img.shields.io/badge/snyk%20vulnerabilities-0-brightgreen?style=plastic)](https://img.shields.io/badge/snyk%20vulnerabilities-0-brightgreen?style=plastic) [![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen?style=plastic)](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen?style=plastic) [![NPM Version](https://img.shields.io/badge/npm-v7.6.1-blue?style=plastic)](https://img.shields.io/badge/npm-v7.6.1-blue?style=plastic) [![License](http://img.shields.io/:license-ICS-blue.svg?style=plastic)](http://badges.mit-license.org) [![Badges](http://img.shields.io/:badges-7/7-ff6799.svg?style=plastic)](https://github.com/badges/badgerbadgerbadger)

[![GitHub Stars](https://img.shields.io/github/stars/nicholasgacicia/IWATS-App?style=social)](https://github.com/nicholasgacicia/IWATS-App) [![GitHub Forks](https://img.shields.io/github/forks/nicholasgacicia/IWATS-App?style=social)](https://github.com/nicholasgacicia/IWATS-App) [![GitHub Follow](https://img.shields.io/github/followers/nicholasgacicia?style=social)](https://github.com/nicholasgacicia) [![Reddit Karma](https://img.shields.io/reddit/user-karma/combined/TheNickCheech?style=social)](https://www.reddit.com/user/TheNickCheech) [![Twitter Follow](https://img.shields.io/twitter/follow/nicholasgacicia?style=social)](https://twitter.com/NicholasGacicia)

## Table of Content

- [Dependencies](#dependencies)
- [Wire Frames](#wireframes)
- [ERD](#ERD)
- [User Stories](#userstories)
- [Team](#team)
- [License](#license)

---

## Dependencies

###### YEMStats - App
- React: v17.0.1
- React-DOM: v17.0.1
- React-Router-DOM: v5.2.0
- React-Scripts: v4.0.3
- React-Bootstrap: v1.5.1
- Bootstrap: v4.6.0
- MDB-React-UI-Kit: v1.0.0-alpha4
- @Material-UI/Core: v4.11.3
- @Material-UI/Icons: v4.11.2
###### YEMStats - API
- Express: v4.17.1
- MongoDB: v3.6.4
- Mongoose: v5.11.19
- Body-Parser: v1.19.0
- CORS: v2.8.5
- BCryptJS: v2.4.3
- DotEnv: v8.2.0
- JSONWebToken: v8.5.1v
- Nodemon: v2.0.7 (dev)

###### Deployment
- GitHub
- Node.js
- MongoDB Atlas
- Heroku

---
## Wire Frames

[![Wire Frames](/src/img/IWATS-Wireframe.png)]()

---

## ERD

[![ERD](/src/img/IWATS-ERD.png)]()

---

## Installation

#### Clone
- Clone this frontend repo to your local machine

```shell
$ git clone https://github.com/nicholasgacicia/IWATS-App.git
$ cd IWATS-App
$ npm i
```

- Clone the router API repo to your local machine

```shell
$ git clone https://github.com/nicholasgacicia/IWATS-API.git
$ cd IWATS-API
$ npm i
```

#### Run

> Open the frontend App directory in one terminal window and run locally:

```shell
$ npm start
```

> Open a second terminal window and navigate to the API root directory. Run the backend server locally:

```shell
$ npm run dev
```

---

## User Stories

##### Homepage
1. Start on the homepage with GitFit name & logo in header. In the body, offer the user the options to either:

##### Login Page/Box

   * Login - with existing User ID (using Email & Password)

      > Redirect to userDashboard

##### Register New User Account

   * Register - new user account

     > Presents new user registration form (Email & Password = required)

      * userInfo: firstName, lastName, dob, gender, height (optional)

      > Allows initial activityData to be logged to initialization healthInsights display (optional)

        * userGoals: weightGoal, stepsGoal, sleepGoal

        * activityLog: logDate, logWeight(lbs), logSteps, logSleep(min)

2. After successfully logging in, display userDashboard which displays activity history and goal tracking

    > healthInsights - (a grid of tables, charts and/or graphs displaying the user's progress towards defined goals)

3. Offer 2 action buttons in Nav before healthInsights

    > Log Daily Activity

      * logDate- default Date.now but ability to enter data for a past (future?) date as well.

      * logWeight- weight measured on logDate

      * logSteps- total daily steps taken on logDate

      * logSleep- total minutes slept the night before logDate


          * Re-directs to userDashboard with updated healthInsights to include the new logged data

    > View & Update userSettings:

      * Present the user a form allowing them to ability to edit thier personal userInfo and update userGoals

---
## Team

| <a href="https://git.generalassemb.ly/nicholasgacicia" target="_blank">**Nicholas Gacicia** <br> SEIR Student</a> | <a href="https://git.generalassemb.ly/kbbushman" target="_blank">**Kenneth Bushman** <br> Instructor</a> | <a href="https://git.generalassemb.ly/msolorio-ga" target="_blank">**Michael Solorio** <br> Associate Instructor</a> |
| :---------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
|      [![Nicholas_Gacicia](https://i.imgur.com/LcK8J3a.jpg?1)](https://git.generalassemb.ly/nicholasgacicia)       |     [![Kenneth_Bushman](https://i.imgur.com/rAfXTA4.jpg?1)](https://git.generalassemb.ly/kbbushman)      |          [![Michael_Solorio](https://i.imgur.com/h8Gz1Xs.jpg?1)](https://git.generalassemb.ly/msolorio-ga)           |
| <a href="https://git.generalassemb.ly/nicholasgacicia" target="_blank">`git.generalassemb.ly/nicholasgacicia`</a> |  <a href="https://git.generalassemb.ly/kbbushman" target="_blank">`git.generalassemb.ly/kbbushman`</a>   |      <a href="https://git.generalassemb.ly/msolorio-ga" target="_blank">`git.generalassemb.ly/msolorio-ga`</a>       |

---

## Project Shoutouts and reflections
- Motivation for this project
- Shout outs to fellow classmates
- Words of wisdom moving forward

---

## License

[![License](http://img.shields.io/:license-ics-blue.svg?style=plastic)](http://opensource.org/licenses/ics-license.php)

- **[ICS license](http://opensource.org/licenses/ics-license.php)**
- Copyright 2021 © <a href="http://www.NicholasGacicia.com" target="_blank">Nicholas Gacicia</a>
