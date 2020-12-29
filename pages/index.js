import Head from 'next/head';
import { Profile, Experience } from '../components';

const experienceItems = [
  {
    id: 1,
    title: 'Software Developer (.NET and Angular)',
    subTitle: 'Panaxeo',
    startDate: '2020',
    location: 'Remotely',
    imgSrc: '/assets/images/experience/panaxeo.jpg',
  },
  {
    id: 2,
    title: 'Software Developer (.NET and Angular)',
    subTitle: 'CRIF',
    startDate: '2019',
    endDate: '2020',
    location: 'Bratislava, Slovakia',
    imgSrc: '/assets/images/experience/crif.png',
  },
  {
    id: 3,
    title: '.NET Developer',
    subTitle: 'Descartes Systems Group',
    startDate: 'Jul 2017',
    endDate: 'Dec 2018',
    location: 'Zilina, Slovakia',
    imgSrc: '/assets/images/experience/descartes.jpg',
  },
  {
    id: 4,
    title: '.NET Developer',
    subTitle: 'NetDirect s.r.o.',
    startDate: 'Sep 2016',
    endDate: 'May 2017',
    location: 'Ostrava, Czech Republic',
    imgSrc: '/assets/images/experience/netdirect.png',
  },
  {
    id: 5,
    title: 'Ruby on Rails Developer',
    subTitle: 'Railsformers',
    startDate: 'Jul 2015',
    endDate: 'Dec 2015',
    location: 'Ostrava, Czech Republic',
    imgSrc: '/assets/images/experience/railsformers.png',
  },
];

const educationItems = [
  {
    id: 1,
    title: 'Technical University of Ostrava',
    subTitle: "Master's degree, Computer Science and Technology",
    startDate: '2012',
    endDate: '2017',
    imgSrc: '/assets/images/experience/vsb.png',
  },
];

export default function Home() {
  return (
    <div className="main font-sans flex flex-wrap">
      <Head>
        <title>My profile - Mario Cerven</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
      <Experience title="Experience" experienceItems={experienceItems} />
      <Experience title="Education" experienceItems={educationItems} />
    </div>
  )
}
