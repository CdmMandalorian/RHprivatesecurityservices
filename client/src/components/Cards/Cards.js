import './style.css';
import CardItem from '../CardItem/CardItem'

function Services() {
  return (
    
    <div className='cards'>
      <h1 className='scards' style={{color: 'rgba(245, 181, 27)' }}>SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='Images/certification-3352920_1280.jpg'
              text='Highly Trained Certified Security Guards. '
              label='Certified'
              
            />
            <CardItem
              src='Images/maayan-nemanov-2lVDdshknXI-unsplash.jpg'
              text='Trained Specialized K9 Patrol Units. '
              label='K9 Patrol Unit'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/tobias-tullius-4dKy7d3lkKM-unsplash.jpg'
              text='Integrity reveals Beauty. Integrity is the Essence of Everything Successful. Subtlety May Deceive You. Integrity Never Will. '
              label='Integrity'
              
            />
            <CardItem
              src='Images/20240420_201925.jpg'
              text='Individual Commitment to a group Effort. That is what Makes a Team Work, a Company Work, a Society Work ....'
              label='Commitment'
              
            />
            <CardItem
              src='Images/kaffeebart-KrPulSdUetk-unsplash.jpg'
              text='People who Truly Understand what is Meant by Self-Reliance, Know they Must Live their Lives by Ethics rather than Rules. '
              label='Reliance'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;