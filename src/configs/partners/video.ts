import {
  LogoUltra,
  LogoRakuten,
  LogoFantagio,
  LogoCrypto,
  LogoKlaytn,
  LogoBepca,
} from '@/configs/images';
import {
  VideoUltrakorea,
  VideoNbaJapan,
  VideoMetamiu,
  VideoShowdown,
  VideoStrike,
  VideoUltraAbuDhabi,
} from '@/configs/videos';

export const partnersVideo = [
  {
    name: 'ultraabudhabi',
    content: 'ULTRA Abu Dhabi 2023',
    images: [LogoUltra],
    video: VideoUltraAbuDhabi,
  },
  {
    name: 'ultrakorea',
    content: 'ULTRA Korea 2022',
    images: [LogoUltra],
    video: VideoUltrakorea,
  },
  {
    name: 'nbajapan',
    content: 'NBA Japan Games 2022',
    images: [LogoRakuten],
    video: VideoNbaJapan,
  },
  {
    name: 'metamiu',
    content: 'Meta Miu',
    images: [LogoFantagio, LogoCrypto],
    video: VideoMetamiu,
  },
  {
    name: 'showdownjapan',
    content: 'Fellaz Showdown Japan 2022',
    images: [LogoKlaytn],
    video: VideoShowdown,
  },
  {
    name: 'strike',
    content: 'Strike Music Festival',
    images: [LogoBepca],
    video: VideoStrike,
  },
];
