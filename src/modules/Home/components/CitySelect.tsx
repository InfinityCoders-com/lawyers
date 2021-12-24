import React from 'react'
import SelectSearch from 'react-select-search';
import CityStateOptions from '../../../config/CityStateOptions.json'

interface ICitySelect {
    listing: any
    city: any
    setCity: (city: any) => void
}

export function CitySelect({
    listing,
    city,
    setCity
}: ICitySelect) {
    const lawyersCities = React.useMemo(() => {
        return listing.map((lawyer: any) => lawyer.city.toLowerCase())
    },[listing])
    return (
        <SelectSearch
            options={CityStateOptions as any}
            value={city}
            className="select-search city-state"
            search={true}
            onChange={setCity}
            filterOptions={(options) => {
                return (value: string) => {
                    var tempOptions = options
                    if(lawyersCities.length) {
                        tempOptions = tempOptions.map((option: any) => ({
                            ...option,
                            items: option.items.filter((city: any) => (
                                lawyersCities.includes(city.name.toLowerCase()) || 
                                lawyersCities.includes(city.value.toLowerCase())
                            ))
                        }))
                    }
                    if (!value.length) {
                        return tempOptions
                    }
                    tempOptions = tempOptions.map((option: any) => ({
                        ...option,
                        items: option.items.filter((city: any) => (
                            city.name.toLowerCase().includes(value.toLowerCase()) || 
                            city.value.toLowerCase().includes(value.toLowerCase())
                        ))
                    }))
                    return tempOptions
                };
            }}
            autoComplete="on"
            placeholder="Select City"
            renderValue={(valueProps: any) => <input {...valueProps} />}
        />
    )
}
