import React from 'react';
import SelectSearch from 'react-select-search';
import { fullName } from '../../../utility/string';

interface ISearch {
    listing: any
    city: any
    search: any
    setSearch: (search: any) => void
}

export function Search({
    listing,
    city,
    search,
    setSearch
}: ISearch) {
    const cityFilteredLawyers = React.useMemo(() => {
        if(city?.length) {
            return listing.filter((lawyer: any) => lawyer.city.toLowerCase() === city.toLowerCase())
        }
        return listing
    },[listing, city])
    const options = React.useMemo(() => {
        return cityFilteredLawyers.map((lawyer: any) => ({
            name: fullName(lawyer.first_name, lawyer.middle_name, lawyer.last_name),
            value: lawyer.id
        }))
    },[cityFilteredLawyers])

    return (
        <SelectSearch
            options={options}
            value={search}
            className="select-search search-name"
            search={true}
            onChange={setSearch}
            filterOptions={(options) => {
                return (value: string) => {
                    if (!value.length || value?.length < 2) {
                        return []
                    }
                    var tempOptions = options.filter((lawyer: any) => (
                        lawyer.name.toLowerCase().includes(value.toLowerCase())
                    ))
                    return tempOptions
                };
            }}
            autoComplete="on"
            placeholder="Search Name"
            renderValue={(valueProps: any) => <input {...valueProps} />}
        />
    )
}
