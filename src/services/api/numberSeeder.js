export async function numberSeeder(){
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [
        {
            "id": "n1",
            "label": "One",
            "value": 1,
        },
        {
            "id": "n2",
            "label": "Two",
            "value": 2
        }
    ]
}