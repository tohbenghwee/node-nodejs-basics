import { Worker } from "worker_threads";
import os from 'os';

const performCalculations = async () => {
    // Write your code here
    const cores = os.cpus().length; 
    const results = new Array(cores); // Store results, maintain order
    const workers = []; 
    let counter = 0;

    return new Promise((resolve) => {
        for (let i = 0; i < cores; i++) {
            // Create a worker for each core
            const worker = new Worker('./src/wt/worker.js');

            worker.postMessage(10 + i);

            worker.on('message', (message) => {
                results[i] = message;
                counter += 1;
                 // Terminate the worker when done
                worker.terminate();
                if (counter === cores) {
                    console.log('Results:', results);
                    resolve(results);
                }
            });

            worker.on('error', (error) => {
                results[i] = error
                counter += 1;
                 // Terminate the worker when done
                worker.terminate();
                if (counter === cores) {
                    console.log('Results:', results);
                    resolve(results);
                }
            });

            workers.push(worker);
        }
    });
};

await performCalculations();