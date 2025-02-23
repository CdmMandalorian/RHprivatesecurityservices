import './style.css';
import CardItem from '../CardItem/CardItem'
import armedGuard from '../../Assets/Images/armed_Guard.jpg'
import uniformedSecurity from '../../Assets/Images/uniformed_Security.jpg'
import unarmedGuard from '../../Assets/Images/unarmed_Guard.jpg'
import k9 from '../../Assets/Images/michael-dziedzic-si06cFB0g1s-unsplash.jpg'
import Trained from '../../Assets/Images/roman-koester-FbtfRkRCvJc-unsplash.jpg'

function Services() {
  return (
    
    <div className='cards'>
      <h1 className='scards' style={{color: 'rgba(245, 181, 27)' }}>SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={Trained}
              title=' Verified Trained Security Guards 📜 '
              text=' BSIS Certified Required. Background-checked Certified.'
              label='Certified'
              
            />
            <CardItem
              src={k9}
              title=' Specialized K9 Patrol Units 🐾 '
              text=' On | Off Leash Collaboration with Trained Dogs.'
              label='K9 Patrol Unit'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={unarmedGuard}
              text=' Reliable Committed Security For A Safe Secure Environment '
              label='Unarmed Guard'
              
            />
            <CardItem
              src={uniformedSecurity}
              text=' Private Event Security Guards Tailored For VIP Protection '
              label='Uniformed Security'
              
            />
            <CardItem
              src={armedGuard}
              text=' Trained Licensed Armed Guards Prioritize Safeguarding '
              label='Armed Guard'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;