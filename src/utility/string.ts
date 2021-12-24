export function fullName(fn:string, mn:string, ln:string) {
    var name = ''
    name = fn?.length ? `${fn} ` : ''
    name = mn?.length ? `${name}${mn} ` : name
    name = ln?.length ? `${name}${ln}` : name
    return name
}

export function degreesSearchableString(degrees: string[]) {
    return degrees.join(', ').split('.').map((degree: string) => degree.trim().toLowerCase()).join('')
}