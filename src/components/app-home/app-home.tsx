import { Component, h } from '@stencil/core';
import mockups from './../../assets/images/illustration-mockups.svg';
import growTogether from './../../assets/images/illustration-grow-together.svg';
import yourUsers from './../../assets/images/illustration-your-users.svg';
import flowingConversation from './../../assets/images/illustration-flowing-conversation.svg';
import logo from './../../assets/images/logo.svg';
import iconEmail from './../../assets/images/icon-email.svg';
import iconPhone from './../../assets/images/icon-phone.svg';
import iconLocation from './../../assets/images/icon-location.svg';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  public contacts = [
    {
      icon: iconLocation,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum nunc quis venenatis porta. Aliquam risus ligula, faucibus vitae molestie in, pulvinar quis mauris',
    },
    {
      icon: iconPhone,
      text: '+55 94023 2001',
    },
    {
      icon: iconEmail,
      text: 'example@email.com',
    },
  ];

  public sociaNetworks = [
    {
      icon: 'logo-facebook',
      url: '',
      name: 'Facebook',
    },
    {
      icon: 'logo-twitter',
      url: '',
      name: 'Twitter',
    },
    {
      icon: 'logo-instagram',
      url: '',
      name: 'Instagram',
    },
  ];

  public topics = [
    {
      title: 'About Us',
      url: '#',
    },
    {
      title: 'What we do',
      url: '#',
    },
    {
      title: 'FAQ',
      url: '#',
    },
    {
      title: 'Career',
      url: '#',
    },
    {
      title: 'Blog',
      url: '#',
    },
    {
      title: 'Contact Us',
      url: '#',
    },
  ];

  render() {
    return (
      <div class="app-home">
        <header class="header">
          <nav class="nav-bar">
            <app-image src={logo} alt="logo" style={{ width: '35%' }} />
            <button class="button button--medium button--white">try it free</button>
          </nav>
          <section class="header-section">
            <div class="header-section__description">
              <h1 class="header-section__title">Build the community your fans will love</h1>
              <p class="header-section__text">
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion
              </p>
              <button class="button button--pink button--font-white button--large"> Get started for free</button>
            </div>
            <app-image class="header-section__image" src={mockups} alt="mockups" />
          </section>
        </header>
        <main class="main">
          <app-card>
            <app-image src={growTogether} alt="grow-together" height="300" />
            <section>
              <h2>Grow Together</h2>
              <p>
                Generate meaningful discussions with you audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form
              </p>
            </section>
          </app-card>

          <app-card>
            <app-image src={flowingConversation} alt="flowing-conversation" height="300" />
            <section>
              <h2>Flowing Conversation</h2>
              <p>
                Generate meaningful discussions with you audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form
              </p>
            </section>
          </app-card>

          <app-card>
            <app-image src={yourUsers} alt="your-users" height="300" />
            <section>
              <h2>Your Users</h2>
              <p>
                Generate meaningful discussions with you audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form
              </p>
            </section>
          </app-card>
        </main>
        <footer class="footer">
          <app-card class="footer-card">
            <h2 class="footer-card__title">Ready to build your community? </h2>
            <button class="button button--pink button--font-white button--large"> Get started for free</button>
          </app-card>
          <app-image class="footer-contacts__logo" src={logo} alt="logo" />
          <div class="footer-information">
            <section class="footer-contacts">
              <ul class="footer-contacts__list">
                {this.contacts.map(contact => (
                  <li class="footer-contacts__item">
                    <img class="footer-contacts__image" src={contact.icon} alt="" />
                    <p class="footer-contacts__text">{contact.text}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section class="footer-topics">
              <ul class="footer-topics__list">
                {this.topics.map(topic => (
                  <li class="footer-topics__item">
                    <a class="footer-topics__link" href={topic.url}>
                      {topic.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            <section class="footer-social">
              <ul class="footer-social__list">
                {this.sociaNetworks.map(sociaNetwork => (
                  <li class="footer-social__item">
                    <a class="footer-social__link" href={sociaNetwork.url}>
                      <ion-icon name={sociaNetwork.icon}></ion-icon>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </footer>
      </div>
    );
  }
}
