# -*- encoding : utf-8 -*-
Delayed::Worker.max_attempts = 5
Delayed::Worker.delay_jobs = !Rails.env.test?
Delayed::Worker.backend = :active_record
