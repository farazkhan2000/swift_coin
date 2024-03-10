import React from 'react';
import { CircleChevronRight } from 'lucide-react';

const Roadmap = () => {

  const roadmaps = [
    {
      id:  1,
      title: "Genesis Stage",
      listItem1: "launch the $SWIFT token.",
      listItem2: "Social media blitz with contests and giveaways.",
      listItem3: "Partner with eco-friendly influencers.",
    },
    {
      id:  2, 
      title: "Takeoff Phase", 
      listItem1: "List SwiftCoin on major exchanges.",
      listItem2: "Launch limited NFT collection for charity.",
      listItem3: "Host virtual launch event with celebrities",
    },
    {
      id:  3, 
      title: "Sky-High Growth Stage", 
      listItem1: "Add utility features like staking and farming.",
      listItem2: "Partner with environmental groups for impact.",
      listItem3: "Host AMAs and virtual meetups.",
    },
    {
      id:  4, 
      title: "Moonshot Expansion Phase", 
      listItem1: "Partner with brands for global reach.",
      listItem2: "Launch cross-platform marketing campaigns.",
      listItem3: "Develop innovative DApps and smart contracts.",
    },
  ];

  return (
    <section className='bg-dark text-light py-5' id="roadmap">
      <div className="container">
        <h2 className='text-danger display-1 fw-bold'>ROADMAP</h2>
        <div className="row py-5">
          {roadmaps.map((roadmap) => (
            <div key={roadmap.id} className="col-lg-6">
              <div className="card text-bg-dark border-danger mb-3" style={{ minHeight: '350px' }}>
                <div className="card-header fs-2 border-danger fw-bold">{roadmap.title}</div>
                <div className="card-body">
                  {/* <h5 className="card-title">Phases</h5> */}
                  <ul className="list-unstyled d-flex flex-column gap-3">
                    <li className='card-text'><CircleChevronRight /> {roadmap.listItem1}</li>
                    <li className='card-text'><CircleChevronRight /> {roadmap.listItem2}</li>
                    <li className='card-text'><CircleChevronRight /> {roadmap.listItem3}</li>
                    <li className='card-text'>{roadmap.listItem4}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
