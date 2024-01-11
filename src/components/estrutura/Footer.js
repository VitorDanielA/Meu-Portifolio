import React from 'react';
import { TelephoneFill, Phone, Envelope, Map, FiletypeJs, Bootstrap, Git } from 'react-bootstrap-icons';
import { FaReact } from 'react-icons/fa';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='mt-3'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 mt-2'>
                <MDBIcon color='secondary' icon='gem' className='' />
                Sobre Mim
              </h6>
              <p>
                Olá, me chamo Vitor Daniel, tenho 22 anos, sou programador desde 2019 quando ingressei na faculdade de Análise e Desenvolvimento de Sistemas. Me tornei desenvolvedor frontend por paixão nessa área.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 mt-2'>
              <h6 className='text-uppercase fw-bold mb-4' >Tecnologias</h6>
              <p>
                <p className='text-reset'> <FaReact size={16} className='me-1'/> React</p>
              </p>
              <p>
              <p className='text-reset'> <Bootstrap size={16} className='me-1'/> Bootstrap</p>
              </p>
              <p>
                <p className='text-reset'> <FiletypeJs size={16} className='me-1'/> JavaScript</p>
              </p>
              <p>
                <p className='text-reset'> <Git size={16} className='me-1'/> Git</p>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 mt-2'>
              <h6 className='text-uppercase fw-bold mb-4'>Contato</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-1' /> <Map size={16} className='me-2'/> 
                Irecê, BA, BR
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-1' /> <Envelope size={16} className='me-2'/>
                vdanielwork@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' className='me-1' /> <Phone size={16}/> + (74) 998153152
              </p>
              <p>
                <MDBIcon color='secondary' className='me-1' /> <TelephoneFill size={16}/> + (74) 998153152
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4'>
        2023
        <p className='text-reset fw-bold'>
          Feito por mim
        </p>
      </div>
    </MDBFooter>
  );
}