import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './Sidebar.css'
import { Modal, Button } from 'react-bootstrap';
// import AnAccordion from './Accordion/AnAccordion.js'
import Accordion from 'react-bootstrap/Accordion'

// import Dashboard from '../Dashboard/Dashboard.js';

// const UseScript = url => {
//     React.useEffect(() => {
//       const script = document.createElement('script');
  
//       script.src = url;
//       script.async = true;
  
//       document.body.appendChild(script);
  
//       return () => {
//         document.body.removeChild(script);
//       }
//     }, [url]);
//   }

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function TheModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

function Sidebar({ language, dontActAsSideBar }) {
  const data = useStaticQuery(graphql`
      query {
          allMdx(
              filter: {fileAbsolutePath: {regex: "/content/haskell/"}}
          ) {
              nodes {
                  frontmatter {
                      title
                      module
                  }
                  id
                  slug
              }
          }
      }
  `)

  let links = {}
  let modules = []
  
  data.allMdx.nodes.forEach(node => {
      const mod = node.frontmatter.module
      console.log("mod", mod)
      if (mod) {
          if (!links[mod]) {
              modules.push(mod)
              links[mod] = [node]
          } else {
              links[mod].push(node)
          }
      }
  })

  // UseScript('https://use.typekit.net/foobar.js')
  // console.log("LINKS", links)
  // (() => {
  //     const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  //     tooltipTriggerList.forEach(tooltipTriggerEl => {
  //       new bootstrap.Tooltip(tooltipTriggerEl)
  //     })
  //   })()

  return (
      <Accordion 
        defaultActiveKey={Array(modules.length).fill(0).map((x,i) => i.toString())} 
        alwaysOpen 
        className={dontActAsSideBar ? '' : 'accordionStyle'}
      >
          {
              modules.map((module,i) => (
                      <Accordion.Item eventKey={`${i}`}>
                          <Accordion.Header>{module}</Accordion.Header>
                          <Accordion.Body>
                              {links[module].map((link, j) => (
                                <p key={j}><Link to={`/courses/${link.slug}`}>
                                  {link.frontmatter.title}
                                </Link></p>
                              ))}
                          </Accordion.Body>
                      </Accordion.Item>
                  // <div>
                  //     <h3>{module}</h3>
                  //     {links[module].map(link => (
                  //         <p>{link.frontmatter.title}</p>
                  //     ))}
                  // </div>
              ))
          }

          <TheModal />
      </Accordion>


      // <div className="flex-shrink-0 p-3 bg-white" style={{width: "280px"}}>
      //     <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      //     {/* <svg className="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg> */}
      //         <span className="fs-5 fw-semibold">Collapsible</span>
      //     </a>
      //     <ul className="list-unstyled ps-0">
      //     <li className="mb-1">
      //         <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
      //         Home
      //         </button>
      //         <div className="collapse show" id="home-collapse">
      //         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
      //         </ul>
      //         </div>
      //     </li>
      //     <li className="mb-1">
      //         <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
      //         Dashboard
      //         </button>
      //         <div className="collapse" id="dashboard-collapse">
      //         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Weekly</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Monthly</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Annually</a></li>
      //         </ul>
      //         </div>
      //     </li>
      //     <li className="mb-1">
      //         <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
      //         Orders
      //         </button>
      //         <div className="collapse" id="orders-collapse">
      //         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">New</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Processed</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Shipped</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Returned</a></li>
      //         </ul>
      //         </div>
      //     </li>
      //     <li className="border-top my-3"></li>
      //     <li className="mb-1">
      //         <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
      //         Account
      //         </button>
      //         <div className="collapse" id="account-collapse">
      //         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">New...</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Profile</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Settings</a></li>
      //             <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Sign out</a></li>
      //         </ul>
      //     </div>
      // </li>
      // </ul>


      // {/* <Dashboard /> */}
      // </div>
  )
}


export default Sidebar