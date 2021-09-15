<?php

namespace App\Http\Controllers;

use App\Product;
use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function categories(){
      $categories = Category::all();
      return response()->json($categories, 200);
    }

    public function index()
    {
        $products = Product::orderBy('created_at', 'desc')->paginate(3);
        return response()->json($products);
    }

  
    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $request->validate([
          'name' => 'required|min:3',
          'image' => 'required|image|mimes:jpeg,png,jpg',
          'category_id' => 'required',
        ]);

        $product = new Product();
        $product->name = $request->name;
        $product->category_id = $request->category_id;

        $path = $request->file('image')->store('products_images');
        $product->image = $path;

        if($product->save()) {
            return response()->json($product, 200);
        } else {
            return response()->json($product, 500);
        }
    }

  
    public function show(Product $product)
    {
        //
    }

  
    public function edit(Product $product)
    {
        //
    }


    public function update(Request $request, Product $product)
    {
        //dd($request->all(), $product);

        $request->validate([
            'name' => 'required|min:3',
            'category_id' => 'required',
        ]);

        $product->name = $request->name;
        $product->category_id = $request->category_id;
        $oldPath = $product->image;

        if($request->hasFile('image')) {
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg'
            ]);
            $path = $request->file('image')->store('products_images');
            $product->image =  $path;
            Storage::delete($oldPath);
        }

        if($product->save()){
            return response()->json($product, 200);
        }else {
            Storage::delete($path);
            return response()->json([
                'message' => 'Error',
                'status_code' => 500
            ], 500);
        }
    }

    public function destroy(Product $product)
    {
        if($product->delete()) {
 
            Storage::delete($product->image);

            return response()->json([
                'message' => 'Product deleted',
                'status_code' => 200
            ], 200);
        }else {
            return response()->json([
                'message' => 'Error',
                'status_code' => 500
            ], 500);
        }
    }
}
