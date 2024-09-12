export function comboboxResponseMapper (data){
        return data.map((item) => ({
          id: item.id || toSnakeCase(item.name) || toSnakeCase(item.value) || crypto.randomUUID(), 
          label: item.name || item.label || toNormalText(item.value) || toNormalText(this.value) || toNormalText(this.id), 
          value: item.value || toSnakeCase(item.name) || toSnakeCase(item.label) ,
          events: [] 
        }));
}

function toSnakeCase(string){
    return string
    .replace(/([a-z])([A-Z])/g, '$1_$2') 
    .replace(/\s+/g, '_')                
    .toLowerCase();                      
}

function toNormalText(string) {
    return string
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
}