import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import '../../../styles/react-tabs.css';
import Overview from '../../Organisms/Details/Overview';
import Cost from '../../Organisms/Details/Cost'
import Registration from '../../Organisms/Details/Registration';
import About from '../../Organisms/Details/About';
import Service from '../../Organisms/Details/Service';


const Layout = ({data}) => {
  return(
    <div>
      <Tabs >
       
            <TabList>
                <Tab>Overview</Tab>
                <Tab>Cost/Funding</Tab>
                <Tab>Requirement/Registration</Tab>
                <Tab>Service</Tab>
                <Tab>About University</Tab>  
            </TabList>
            
            <TabPanel><Overview  data={data} /></TabPanel>
            <TabPanel><Cost  data={data} /></TabPanel>
            <TabPanel><Registration  data={data} /></TabPanel>
            <TabPanel><Service  data={data} /></TabPanel>
            <TabPanel><About  data={data} /></TabPanel>  
      </Tabs>
    </div>
  )
};

export default Layout