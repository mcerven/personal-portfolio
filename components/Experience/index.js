import React from 'react';
import { ExperienceItem } from './ExperienceItem';

const experienceList = [
  {
    id: 1,
    title: 'Software Developer (.NET and Angular)',
    company: 'Panaxeo',
    startDate: '2020',
    imgSrc: 'https://media-exp1.licdn.com/dms/image/C4D0BAQH0x4qlq8rBBg/company-logo_100_100/0/1604394906723?e=1617235200&v=beta&t=h_VVoulvnnqhwzHLqzVsA8N4UViMvNdGtnqPnGupbQM',
  },
  {
    id: 2,
    title: 'Software Developer (.NET and Angular)',
    company: 'CRIF',
    startDate: '2019',
    endDate: '2020',
    location: 'Bratislava, Slovakia',
    imgSrc: 'https://media-exp1.licdn.com/dms/image/C560BAQFFlC9wdmLDmg/company-logo_100_100/0/1519856155122?e=1617235200&v=beta&t=1W6SWqQ526LgNAeSipPpRQu-LQxwF6CoE2el-ppGGqM',
  },
  {
    id: 3,
    title: '.NET Developer',
    company: 'CRIF',
    startDate: 'Jul 2017',
    endDate: 'Dec 2018',
    location: 'Zilina, Slovakia',
    imgSrc: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGsdVjaPVdbog/company-logo_100_100/0/1538577053432?e=1617235200&v=beta&t=q891aEDZZngWh1xO4vrO6PnPL4biOrUaK6_W-Qhk9NI',
  },
  {
    id: 4,
    title: '.NET Developer',
    company: 'NetDirect s.r.o.',
    startDate: 'Sep 2016',
    endDate: 'May 2017',
    location: 'Ostrava, Czech Republic',
    imgSrc: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGnmvmh5_zhXQ/company-logo_100_100/0/1573654409713?e=1617235200&v=beta&t=Gav7TzeL6scuAF_91WQrljSikvzaVJg3Di-9JVjZyy4',
  },
  {
    id: 5,
    title: 'Ruby on Rails Developer',
    company: 'Railsformers',
    startDate: 'Jul 2015',
    endDate: 'Dec 2015',
    location: 'Ostrava, Czech Republic',
    imgSrc: 'https://media-exp1.licdn.com/dms/image/C560BAQG-9XySTGYQkw/company-logo_100_100/0/1553786147254?e=1617235200&v=beta&t=l1JDP9WMR5Zp3mzvK-pLyESvAk5117iP1kaxMvb5UOI',
  },
];

export function Experience() {
  return (
    <section className="mt-10 pr-10 w-1/2">
      <h2 className="text-2xl text-accent">Experience</h2>
      <div className="flex flex-col gap-3">
      { experienceList.map(exp => <ExperienceItem key={exp.id} {...exp} />)}
      </div>
    </section>
  );
}
