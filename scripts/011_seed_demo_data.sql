-- Add demo users (already exists from signups, but adding sample data)
INSERT INTO users (id, email, full_name, role, avatar_url, bio, skills, location, hourly_rate, experience_level)
VALUES 
  ('demo-worker-1', 'sarah.chen@example.com', 'Sarah Chen', 'job_seeker', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', 'Full-stack developer with 5+ years experience in React and Node.js', ARRAY['React', 'Node.js', 'TypeScript', 'PostgreSQL'], 'San Francisco, CA', 85.00, 'expert'),
  ('demo-worker-2', 'michael.rodriguez@example.com', 'Michael Rodriguez', 'job_seeker', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael', 'UI/UX Designer specializing in modern web applications', ARRAY['Figma', 'Adobe XD', 'UI Design', 'Prototyping'], 'Austin, TX', 75.00, 'intermediate'),
  ('demo-worker-3', 'emma.wilson@example.com', 'Emma Wilson', 'job_seeker', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', 'DevOps engineer with cloud infrastructure expertise', ARRAY['AWS', 'Docker', 'Kubernetes', 'CI/CD'], 'Seattle, WA', 95.00, 'expert'),
  ('demo-employer-1', 'john@techcorp.com', 'John Smith', 'employer', 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', 'Hiring manager at TechCorp', ARRAY[], 'New York, NY', NULL, NULL),
  ('demo-employer-2', 'lisa@innovate.com', 'Lisa Johnson', 'employer', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa', 'CEO at Innovate Solutions', ARRAY[], 'Boston, MA', NULL, NULL)
ON CONFLICT (id) DO NOTHING;

-- Add demo jobs
INSERT INTO jobs (id, employer_id, title, description, category, employment_type, experience_level, budget_min, budget_max, skills_required, location, is_remote, status)
VALUES 
  ('job-1', 'demo-employer-1', 'Senior Full-Stack Developer', 'We are seeking an experienced full-stack developer to join our growing team. You will be responsible for building scalable web applications using modern technologies.', 'Web Development', 'full_time', 'expert', 120000, 160000, ARRAY['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'], 'New York, NY', true, 'open'),
  ('job-2', 'demo-employer-1', 'UI/UX Designer', 'Looking for a creative UI/UX designer to craft beautiful and intuitive user experiences for our web and mobile applications.', 'Design', 'contract', 'intermediate', 70, 95, ARRAY['Figma', 'Adobe XD', 'UI Design', 'Prototyping'], 'Remote', true, 'open'),
  ('job-3', 'demo-employer-2', 'DevOps Engineer', 'Join our infrastructure team to build and maintain scalable cloud solutions. Experience with AWS and Kubernetes required.', 'DevOps', 'full_time', 'expert', 130000, 170000, ARRAY['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'], 'Boston, MA', true, 'open'),
  ('job-4', 'demo-employer-2', 'Mobile App Developer', 'Develop cross-platform mobile applications using React Native. Must have experience with iOS and Android development.', 'Mobile Development', 'contract', 'intermediate', 80, 110, ARRAY['React Native', 'TypeScript', 'iOS', 'Android'], 'Remote', true, 'open'),
  ('job-5', 'demo-employer-1', 'Data Scientist', 'Analyze large datasets and build machine learning models to drive business insights and automation.', 'Data Science', 'full_time', 'expert', 140000, 180000, ARRAY['Python', 'TensorFlow', 'SQL', 'Machine Learning'], 'New York, NY', false, 'open')
ON CONFLICT (id) DO NOTHING;

-- Add demo applications
INSERT INTO applications (id, job_id, worker_id, cover_letter, status, proposal_amount)
VALUES 
  ('app-1', 'job-1', 'demo-worker-1', 'I am very excited about this opportunity. With over 5 years of full-stack development experience, I have built numerous scalable applications using React, Node.js, and PostgreSQL. I would love to bring my expertise to your team.', 'pending', 145000),
  ('app-2', 'job-2', 'demo-worker-2', 'As a UI/UX designer with a passion for creating intuitive user experiences, I believe I would be a great fit for this role. My portfolio showcases various web and mobile designs that prioritize both aesthetics and usability.', 'under_review', 85),
  ('app-3', 'job-3', 'demo-worker-3', 'I have extensive experience in cloud infrastructure and DevOps practices. I have successfully deployed and managed production systems on AWS using Docker and Kubernetes. I am confident I can help optimize your infrastructure.', 'accepted', 155000)
ON CONFLICT (id) DO NOTHING;

-- Add demo portfolio items
INSERT INTO portfolio (id, user_id, title, description, project_url, image_url, technologies)
VALUES 
  ('port-1', 'demo-worker-1', 'E-Commerce Platform', 'Built a full-featured e-commerce platform with React, Node.js, and PostgreSQL. Includes payment processing, inventory management, and admin dashboard.', 'https://github.com/example/ecommerce', 'https://picsum.photos/seed/ecommerce/800/600', ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe']),
  ('port-2', 'demo-worker-1', 'Task Management App', 'Collaborative task management application with real-time updates using WebSockets.', 'https://github.com/example/taskapp', 'https://picsum.photos/seed/taskapp/800/600', ARRAY['React', 'TypeScript', 'Socket.io', 'MongoDB']),
  ('port-3', 'demo-worker-2', 'Mobile Banking UI', 'Complete UI/UX design for a modern mobile banking application with focus on accessibility and user experience.', 'https://figma.com/example', 'https://picsum.photos/seed/banking/800/600', ARRAY['Figma', 'UI Design', 'UX Research']),
  ('port-4', 'demo-worker-3', 'Cloud Infrastructure', 'Designed and implemented a multi-region cloud infrastructure on AWS with automatic failover and scaling.', 'https://github.com/example/infrastructure', 'https://picsum.photos/seed/cloud/800/600', ARRAY['AWS', 'Terraform', 'Kubernetes', 'Docker'])
ON CONFLICT (id) DO NOTHING;

-- Add demo certifications
INSERT INTO certifications (id, user_id, name, issuer, issue_date, credential_url)
VALUES 
  ('cert-1', 'demo-worker-1', 'AWS Certified Solutions Architect', 'Amazon Web Services', '2023-06-15', 'https://aws.amazon.com/certification/'),
  ('cert-2', 'demo-worker-3', 'Certified Kubernetes Administrator', 'Cloud Native Computing Foundation', '2023-08-20', 'https://www.cncf.io/certification/cka/'),
  ('cert-3', 'demo-worker-2', 'Google UX Design Professional Certificate', 'Google', '2023-03-10', 'https://grow.google/certificates/ux-design/')
ON CONFLICT (id) DO NOTHING;

-- Add demo wallets
INSERT INTO wallets (id, user_id, balance, total_earned, pending_balance)
VALUES 
  ('wallet-1', 'demo-worker-1', 5240.00, 28500.00, 1200.00),
  ('wallet-2', 'demo-worker-2', 3180.00, 15600.00, 850.00),
  ('wallet-3', 'demo-worker-3', 8920.00, 42300.00, 2400.00),
  ('wallet-4', 'demo-employer-1', 0.00, 0.00, 0.00),
  ('wallet-5', 'demo-employer-2', 0.00, 0.00, 0.00)
ON CONFLICT (id) DO NOTHING;

-- Add demo transactions
INSERT INTO transactions (wallet_id, type, amount, status, description)
VALUES 
  ('wallet-1', 'earning', 5000.00, 'completed', 'Payment for Full-Stack Development Project'),
  ('wallet-1', 'earning', 3500.00, 'completed', 'Payment for API Development'),
  ('wallet-1', 'withdrawal', 2000.00, 'completed', 'Withdrawal to Bank Account'),
  ('wallet-2', 'earning', 2400.00, 'completed', 'Payment for UI/UX Design Project'),
  ('wallet-2', 'earning', 1800.00, 'pending', 'Payment for Website Redesign'),
  ('wallet-3', 'earning', 8000.00, 'completed', 'Payment for Cloud Infrastructure Setup'),
  ('wallet-3', 'earning', 4500.00, 'completed', 'Payment for DevOps Consulting'),
  ('wallet-3', 'withdrawal', 3000.00, 'completed', 'Withdrawal to Bank Account')
ON CONFLICT DO NOTHING;

-- Add demo messages
INSERT INTO messages (id, sender_id, receiver_id, subject, content, is_read)
VALUES 
  ('msg-1', 'demo-employer-1', 'demo-worker-1', 'Re: Full-Stack Developer Position', 'Hi Sarah, I reviewed your application and I am impressed with your experience. Would you be available for a video call next week?', false),
  ('msg-2', 'demo-worker-1', 'demo-employer-1', 'Re: Full-Stack Developer Position', 'Thank you for considering my application! I would be happy to schedule a call. I am available Monday through Thursday next week.', true),
  ('msg-3', 'demo-employer-2', 'demo-worker-3', 'DevOps Position - Next Steps', 'Emma, congratulations! We would like to move forward with your application. Please let me know your available start date.', false)
ON CONFLICT (id) DO NOTHING;

-- Add demo notifications
INSERT INTO notifications (id, user_id, type, title, message, is_read)
VALUES 
  ('notif-1', 'demo-worker-1', 'application', 'Application Under Review', 'Your application for Senior Full-Stack Developer has been reviewed by the employer.', false),
  ('notif-2', 'demo-worker-2', 'message', 'New Message', 'You have received a new message from TechCorp.', false),
  ('notif-3', 'demo-worker-3', 'application', 'Application Accepted', 'Congratulations! Your application for DevOps Engineer has been accepted.', false),
  ('notif-4', 'demo-employer-1', 'application', 'New Application', 'You have received a new application for UI/UX Designer position.', true)
ON CONFLICT (id) DO NOTHING;
