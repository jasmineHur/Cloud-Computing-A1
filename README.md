<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="/images/Logo.png" alt="Logo"/>
  </a>

  <h3 align="center">Cloud Computing (CAB432)</h3>
  </div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#architecture">Architecture</a></li>
    <ul>
        <li><a href="#technical-breakdown">Technical breakdown</a></li>
    </ul>
    <ul>
        <li><a href="#data-Flow">Data Flow</a></li>
    </ul>
    <li><a href="#reports">Reports</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="/images/Mainpage.png" />

This project is an application that shows events in USA by category. Especially, people who like sports go to other countries to watch the game in person, and it is an application for those people. Using the SeatGeek API and the Leaflet API to search for event types, Leaflet shows where the game takes place on the map. Use the Openweather API to display the weather within 5 days and users can bring raincoats to the stadium if there is rainy.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![NodeJS][Node-js]][Node-url]
- [![JS][JS]][JS-url]
- [![AWS][AWS]][AWS-url]
- [![Docker][Docker]][Docker-url]
- [![Ubuntu][Ubuntu]][Ubuntu-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install
  ```

  ```sh
  npm start
  ```

- docker

  - In Local (For M1 ChipSet)

  ```sh
  docker build --platform=linux/amd64 -t YOUR_DIRECTORY_AND_IMAGE .
  docker images
  docker logout
  docker login
  ```

  - In AWS

  ```sh
  sudo curl -fsSL https://get.docker.com/ | sh
  sudo docker login
  sudo docker pull jasminehur238/demo

  sudo docker run -e AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY_ID" -e AWS_SECRET_ACCESS_KEY="YOUR_SECRET_ACCESS_KEY" -e AWS_SESSION_TOKEN="YOUR_SESSION_TOKEN" -e SEATGEEK_API_KEY="YOUR_API_KEY" -e SEATGEEK_SECRET_API_KEY="YOUR_API_SECRER_KEY" -e OPENWEATHER_API_KEY=" YOUR_API_KEY" -p 3000:3000 --platform linux/amd64 -t YOUR_DIRECTORY_AND_IMAGE

  docker build --platform=linux/amd64 -t jasminehur238/final1 .

  sudo docker login
  sudo docker pull jasminehur238/final1

  sudo docker run -e AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY_ID" -e AWS_SECRET_ACCESS_KEY="YOUR_SECRET_ACCESS_KEY" -e AWS_SESSION_TOKEN="YOUR_SESSION_TOKEN" -e SEATGEEK_API_KEY="YOUR_API_KEY" -e SEATGEEK_SECRET_API_KEY="YOUR_API_SECRER_KEY" -e OPENWEATHER_API_KEY="YOUR_API_KEY" -p 3000:3000 --platform linux/amd64 -t YOUR_DIRECTORY_AND_IMAGE
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ARCHITECTURE -->

## Architecture

### Technical Breakdown

<img src="/images/TechBreakDown.png" />

### Data Flow

<img src="/images/DataFlow.png" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- REPORT -->

## Reports

Documenting all process and description

<a href="report.pdf">Report</a> <br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Created by Jasmine Hur

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jasmine Hur: jasminehur238@gmail.com

Other Projects: [https://github.com/jasmineHur?tab=repositories](https://github.com/jasmineHur?tab=repositories)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Node-js]: https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs
[Node-url]: https://nodejs.org/en
[JS]: https://img.shields.io/badge/JavaScript-fcba03?style=for-the-badge&logo=javascript
[JS-url]: https://www.javascript.com/
[Json]: https://img.shields.io/badge/Json-000000?style=for-the-badge&logo=json
[Json-url]: https://www.json.org/json-en.html
[Mysql]: https://img.shields.io/badge/Mysql-ffffff?style=for-the-badge&logo=mysql
[Mysql-url]: https://www.mysql.com/
[Swagger-io]: https://img.shields.io/badge/Swagger-000000?style=for-the-badge&logo=swagger
[Swagger]: https://swagger.io/
[Docker]: https://img.shields.io/badge/Docker-384d54?style=for-the-badge&logo=docker
[Docker-url]: https://www.docker.com/
[Ubuntu]: https://img.shields.io/badge/Ubuntu-000000?style=for-the-badge&logo=ubuntu
[Ubuntu-url]: https://ubuntu.com/
[AWS]: https://img.shields.io/badge/AWS-000000?style=for-the-badge&logo=amazon
[AWS-url]: https://aws.amazon.com/?nc2=h_lg
