import React from 'react';

const Roadmap = () => {

  const roadmaps = [
    {
      id:  1,
      title: "PHASE 1 - DEVELOPMENT",
      listItem1: "Design and planning of the platform.",
      listItem2: "Development of a prototype to test the feasibility of the project.",
      listItem3: "Creation of a detailed business plan.",
      listItem4: "Recruiting a team of experienced professionals."
    },
    {
      id:  2, 
      title: "PHASE 2 - EXECUTION", 
      listItem1: "Execution of the development plan.",
      listItem2: "Testing and debugging.",
      listItem3: "Deployment of the platform.",
      listItem4: "Initial marketing and community building."
    },
    {
      id:  3, 
      title: "PHASE 3 - EXECUTION", 
      listItem1: "Execution of the development plan.",
      listItem2: "Testing and debugging.",
      listItem3: "Deployment of the platform.",
      listItem4: "Initial marketing and community building."
    },
    {
      id:  4, 
      title: "PHASE 4 - EXECUTION", 
      listItem1: "Execution of the development plan.",
      listItem2: "Testing and debugging.",
      listItem3: "Deployment of the platform.",
      listItem4: "Initial marketing and community building."
    },
  ];

  return (
    <section className='bg-dark text-light py-5' id="roadmap">
      <div className="container">
        <h2 className='text-danger display-1 fw-bold'>ROADMAP</h2>
        <div className="row py-5">
          {roadmaps.map((roadmap) => (
            <div key={roadmap.id} className="col-lg-6">
              <div className="card text-bg-danger mb-3" style={{ minHeight: '350px' }}>
                <div className="card-header fs-2 fw-bold">{roadmap.title}</div>
                <div className="card-body">
                  <h5 className="card-title">Phases</h5>
                  <ul className="">
                    <li className='card-text'>{roadmap.listItem1}</li>
                    <li className='card-text'>{roadmap.listItem2}</li>
                    <li className='card-text'>{roadmap.listItem3}</li>
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
