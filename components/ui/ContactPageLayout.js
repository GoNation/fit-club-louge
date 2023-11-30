import MapSection from 'components/sections/MapSection';
import CustomForm from './common/CustomForm';
import HoursSection from 'components/sections/HoursSection';

const ContactPageLayout = ({ aboutData, fields, iframe, hideMap }) => {
  return (
    <>
      {!hideMap && <MapSection aboutData={aboutData} iframeURL={iframe} />}
      {/* <HoursSection aboutdata={aboutData} /> */}
      <CustomForm formName="contact" fields={fields} />
    </>
  );
};

export default ContactPageLayout;
