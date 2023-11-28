import MapSection from 'components/sections/MapSection';
import CustomForm from './common/CustomForm';
import HoursSection from 'components/sections/HoursSection';

const ContactPageLayout = ({ aboutData, fields }) => {
  return (
    <>
      <MapSection aboutData={aboutData} />
      <HoursSection aboutdata={aboutData} />
      <CustomForm formName="contact" fields={fields} />
    </>
  );
};

export default ContactPageLayout;
