const parseEnv = () => {
    // Write your code here 
    const environments = process.env;
    const holder = []
    for (const [key, value] of Object.entries(environments)) {
        if (key.startsWith('RSS_')) {
            holder.push(`${key}=${value}`)
        }
    }
    console.log(holder.join("; "))
};
parseEnv();