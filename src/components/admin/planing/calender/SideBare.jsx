import { formatDate } from '@fullcalendar/core';

export default function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
    return (
        <div className='flex flex-col h-full'>
            <div className='p-4'>
                <h2 className='text-2xl font-bold'>Instructions</h2>
                <ul className='pl-4'>
                    <li>Select dates and you will be prompted to create a new event</li>
                    <li>Drag, drop, and resize events</li>
                    <li>Click an event to delete it</li>
                </ul>
            </div>
            <div className='p-4'>
                <label className='inline-flex items-center'>
                    <input
                        type='checkbox'
                        checked={weekendsVisible}
                        onChange={handleWeekendsToggle}
                        className='mr-2'
                    />
                    Toggle weekends
                </label>
            </div>
            <div className='p-4 flex-1 overflow-y-auto'>
                <h2 className='text-lg font-bold'>All Events ({currentEvents.length})</h2>
                <ul className='pl-4'>
                    {currentEvents.map((event) => (
                        <SidebarEvent key={event.id} event={event} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

function SidebarEvent({ event }) {
    return (
        <li className='mb-4' key={event.id}>
            <span className='font-semibold'>
                {formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
            <span>{event.title}</span>
        </li>
    );
}
