<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Blog;

class BlogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Blog::truncate();
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 50; $i++) {
            Blog::create([
                'publish_date' => $faker->date,
                'title_text' => $faker->sentence,
                'description_text' => $faker->sentence,
                'body_text' => $faker->paragraph,
            ]);
        }
    }
}
