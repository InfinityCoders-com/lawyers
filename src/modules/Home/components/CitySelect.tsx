import React from 'react'
import SelectSearch from 'react-select-search';
import CityStateOptions from '../../../config/CityStateOptions.json'

export function CitySelect() {
    return (
        <SelectSearch
            options={CityStateOptions as any}
            value={""}
            className="select-search city-state"
            search={true}
            autoComplete="on"
            placeholder="Select City"
            renderValue={(valueProps: any) => <input {...valueProps} />}
        />
    )
}
