const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);
    const holder = [];

  for (let i = 0; i < args.length; i += 2) {
    let propName = args[i].replace('--', '');
    let value = args[i + 1];
    holder.push(`${propName} is ${value}`);
  }

  console.log(holder.join(', '));
};

parseArgs();