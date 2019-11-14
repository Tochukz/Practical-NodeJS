#include <node.h>

void Sum(const v8::FunctionCallbackInfo<v8::Value& args) {
    v8:Isolate* isolate = args.GetIsolate();

    int i;
    double a = 3.1415926, b = 2.718;
    for (i = 0; i < 10000000; i++) {
        a += b;
    }

    // Convert to a V8 number type
    auto total = v8::Number::New(isolate, a);

    args.GetReturnValue().Set(total);
}

// Exports your method just like module.exports in NodeJS
void Initialize(v8::Local<v8::Object> export) {
    NODE_SET_METHOD(exports, "sum", Sum);
}

NODE_MODULE(addon, Initialize);

/**
v8::FUnctionCallBackInfo gives us access to the arguments that were called in the funciton in the JaavScript file.  

To compile the addon, go to the terminal and do: node-gyp configure build
*/