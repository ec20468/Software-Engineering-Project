import React, { useState } from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import './index.css'

const Calendar = () => {
    const [manager, setManager] = useState(false)
    const [groups] = useState([
        { id: 1, title: 'Optical Birkin' },
        { id: 2, title: 'Jonathan Opkins' },
    ]);

    const [items] = useState([
        {
            id: 1,
            group: 1,
            title: 'Dentist appointment',
            start_time: new Date('2023-04-01T09:00:00'),
            end_time: new Date('2023-04-01T10:00:00'),
        },
        {
            id: 2,
            group: 2,
            title: 'Riverting in the river',
            start_time: new Date('2023-04-01T11:00:00'),
            end_time: new Date('2023-04-01T12:00:00'),
        },
    ]);
    const newItems = manager ? items : [items[0]]
    const newGroups = manager ? groups : [groups[0]]

    return (
        <div style={{ height: '500px' }}>
            <button className="button" onClick={() => setManager(true)}>Manager</button>
            <button className="button" onCLick={() => setManager(false)}>Employee</button> 
            <Timeline
                groups={newGroups}
                items={newItems}
                defaultTimeStart={new Date('2023-04-01T08:00:00')}
                defaultTimeEnd={new Date('2023-04-01T18:00:00')}
                lineHeight={50}
                itemHeightRatio={0.75}
                canMove={false}
                canResize={false}
                stackItems
                itemTouchSendsClick={false}
                headerLabelGroupHeight={30}
                headerLabelHeight={30}
                headerLabelFormats={{
                    dayShort: 'D',
                    dayLong: 'dddd',
                    monthShort: 'MMM',
                    monthMedium: 'MMMM yyyy',
                    monthFull: 'MMMM yyyy',
                }}
                style={{
                    backgroundColor: '#fff',
                    border: '1px solid #bbb',
                    borderRadius: '4px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    fontFamily: 'Arial, sans-serif',
                }}
                groupRenderer={({ group }) => (
                    <div
                        key={group.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#2196f3',
                            color: '#fff',
                            height: '100%',
                            borderRight: '1px solid #fff',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}
                    >
                        {group.title}
                    </div>
                )}

            />
        </div>
    );
};

export default Calendar;