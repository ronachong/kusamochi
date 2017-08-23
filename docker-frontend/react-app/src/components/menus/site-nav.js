import React, { Component } from 'react';

// div.horizontal-icons {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     padding: 0 0 10px 0;
// }
// .big-icon-link, .big-icon, .iframe-overlay, h4 {
//     width: 165px;
//     height: 165px;
// }
//
// .big-icon-link {
//     flex: 1 1 content;
//
// }
//
// .big-icon {
//     position: relative;
//     overflow: hidden;
//     position: relative;
//     background: url("morgue-images/Manga/unknown%20-%201.jpg") no-repeat;
// }
//
// .iframe-overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
// }
//
// #art.big-icon, #art .iframe-overlay {
//     background:url(/portfolio/doodling/2014-08ish.jpg) right bottom/170% auto no-repeat;
// }
//
// #inspiration.big-icon, #inspiration .iframe-overlay {
//     background:url(/morgue-images/Design/quick%20-%201.jpg) right bottom/170% auto no-repeat;
// }
//
// #diary.big-icon, #diary .iframe-overlay {
//     background:url(/diary%20coding.png) right center/auto 300% no-repeat;
// }
//
// #chat.big-icon, #chat .iframe-overlay {
//     background:url("https://s3.amazonaws.com/woothumbs/kiwiirc.com.png") right center/auto 100% no-repeat;
// }
// .invisible {
//     display:none;
// }
//
// .big-icon iframe {
//     width: 1100px;
//     height: 1200px;
//     background: red;
//     -ms-zoom: 0.25;
//     -moz-transform: scale(.25);
//     -moz-transform-origin: 0 0;
//     -o-transform: scale(.25);
//     -o-transform-origin: 0 0;
//     -webkit-transform: scale(.25);
//     -webkit-transform-origin: 0 0;
// }
//
// h4 {
//     color: white;
//     font-size: 52px;
//     line-height: 165px;
//     text-align: center;
//     margin: 0;
//     position: absolute;
//     top: 0;
//     left: 0;
//     opacity:0.7;
//     background:rgba(200,200,200,.3);
//
//
// }
//
// #fine-arts h4, #inspiration h4 {
//     line-height: 80px;
// }
//
// h4:hover {
//     opacity:0.7;
//     background:rgba(200,0,0,1);
// }

// const modulesObj = {
//   portfolio: {
//     link: '#',
//     label: 'art',
//     icon: '../../assets/2014-08ish.jpg'
//   },
//   morgue: {
//     link: '#',
//     label: 'inspiration',
//     icon: '../../assets/quick%20-%201.jpg'
//   },
//   diary: {
//     link: '#',
//     label: 'diary',
//     icon: '../../assets/diary%20coding.png'
//   },
//   bbs: {
//     link: '#',
//     label: 'chat',
//     icon: 'https://s3.amazonaws.com/woothumbs/kiwiirc.com.png'
//   }
// }

const modules = [
  { key: 'portfolio',
    link: '#',
    label: 'art',
    icon: '../../assets/2014-08ish.jpg'
  },
  { key: 'morgue',
    link: '#',
    label: 'inspiration',
    icon: '../../assets/quick%20-%201.jpg'
  },
  { key: 'diary',
    link: '#',
    label: 'diary',
    icon: '../../assets/diary%20coding.png'
  },
  { key: 'bbs',
    link: '#',
    label: 'chat',
    icon: 'https://s3.amazonaws.com/woothumbs/kiwiirc.com.png'
  }
];

class ModuleIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return(
      <a href={this.props.link}>
        <iframe src={this.props.link}></iframe>
        <div>
          <h2>{this.props.label}</h2>
        </div>
      </a>
    )
  }
}

class SiteNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderModuleIcons(){
    return (modules.map((module) =>
      <ModuleIcon
        key={module.key}
        link={module.link}
        label={module.label}
      />
    ));
  }

  render() {
    return (
      <div>
        { this.renderModuleIcons() }
      </div>
    );
  }
}

export default SiteNav;
