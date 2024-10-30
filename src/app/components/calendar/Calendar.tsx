"use client"

import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import BootstrapPlugin  from '@fullcalendar/bootstrap5'

const Calendar = () => {

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            headerToolbar={{ left: 'today', center: 'prev title next', right: 'dayGridMonth,timeGridWeek,timeGridDay' }}
            editable
            selectable
            themeSystem='bootstrap5'
            buttonIcons={{
                prev: 'bi bi-arrow-left',
                next: 'bi bi-arrow-right',
            }}
            locale='pt-br'
            height='100%'
        />
    )
}

export default Calendar
