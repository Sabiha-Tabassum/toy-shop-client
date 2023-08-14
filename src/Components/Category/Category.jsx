import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../Hooks/UseMenu/UseMenu';
import CategoryData from '../CategoryData/CategoryData';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Category = () => {

    useEffect(()=>{
        Aos.init({duration: 3000})
    },[])

    const [menu] = UseMenu();
    // console.log(menu)
    const policeCar = menu.filter(item => item.subCategory === "Lego Police Car");
    const lamborghini = menu.filter(item => item.subCategory === "Lamborghini");
    const ferrari = menu.filter(item => item.subCategory === "Ferrari");
    const matchbox = menu.filter(item => item.subCategory === "Matchbox Police Cruiser");
    const porsche = menu.filter(item => item.subCategory === "Porsche");

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='text-center my-20'>
                <h1 className='text-2xl font-bold text-amber-500'>Shop By Category</h1>
            </div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Police Car</Tab>
                    <Tab>Lamborghini Car</Tab>
                    <Tab>Ferrari</Tab>
                    <Tab>Matchbox Police Cruiser</Tab>
                    <Tab>Porsche</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-2'data-aos="flip-down">
                        {
                            policeCar.map(item => <CategoryData
                                key={item._id}
                                item={item}></CategoryData>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2'data-aos="flip-up">
                        {
                            lamborghini.map(item => <CategoryData
                                key={item._id}
                                item={item}></CategoryData>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2'data-aos="flip-down">
                        {
                            ferrari.map(item => <CategoryData
                                key={item._id}
                                item={item}></CategoryData>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2'data-aos="flip-up">
                        {
                            matchbox.map(item => <CategoryData
                                key={item._id}
                                item={item}></CategoryData>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2'data-aos="flip-down">
                        {
                            porsche.map(item => <CategoryData
                                key={item._id}
                                item={item}></CategoryData>)
                        }
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;