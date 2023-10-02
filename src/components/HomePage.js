// HomePage.js

import React from 'react';

function HomePage() {
    return (
        <div>
            <div class="container">
                <header class="text-center mt-5">
                    <h1>Welcome to IAPWizard</h1>
                    <p class="lead">Your solution for efficient incident management.</p>
                </header>
                <main>
                    <section class="features text-center my-5">
                        <h2>Key Features</h2>
                        <div class="row">
                            <div class="col-md-4">
                                <p>Effortless Incident Reporting</p>
                            </div>
                            <div class="col-md-4">
                                <p>Real-time Collaboration</p>
                            </div>
                            <div class="col-md-4">
                                <p>Customizable Incident Action Plans</p>
                            </div>
                        </div>
                    </section>
                    <section class="cta text-center my-5">
                        <h2>Get Started</h2>
                        <p>Sign in or create an account to start managing incidents with ease.</p>
                        <a href="/signin" class="btn btn-primary mr-2">Sign In</a>
                        <a href="/signup" class="btn btn-secondary">Sign Up</a>
                    </section>
                </main>
                <footer class="text-center my-5">
                    
                </footer>
            </div>
        </div>
  );
}

export default HomePage;