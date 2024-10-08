import {spawn} from 'child_process'

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn('node', ['./src/cp/files/script.js', args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    // Parent process stdin to child stdin
    process.stdin.pipe(child.stdin);

    // Child process stdout to parent stdout
    child.stdout.pipe(process.stdout);

     return new Promise((resolve, reject) => {
        child.on('exit', (code) => {
            if (code === 0) {
                resolve(`Child exit code: ${code}`);
            } else {
                reject(new Error(`Child exit code: ${code}`));
            }
        });
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2"] /* [someArgument1, someArgument2, ...] */);
